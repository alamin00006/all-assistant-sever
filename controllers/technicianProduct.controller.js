const TechnicianProduct = require("../models/TechnicianProduct");
const TechnicianCategory = require("../models/TechnicianCategory");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../public/uploads");

exports.getTechProducts = async (req, res, next) => {
  try {
    const products = await TechnicianProduct.find({});
    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};

exports.getTechProductDetails = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await TechnicianProduct.findById(id);
    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};

exports.createTechProduct = async (req, res) => {
  try {
    //   console.log(req.body)
    // console.log(req?.files.image[0].path);

    const categoryParse = JSON.parse(req.body.technicianCategory);

    const product = new TechnicianProduct({
      technicianProductName: req.body.technicianProductName,
      technicianProductPrice: req.body.technicianProductPrice,
      technicianCategory: {
        categoryName: categoryParse.categoryName,
        category_id: categoryParse.category_id,
      },

      technicianProductImage: req?.files.image[0].path,
    });

    // in Category product Push start

    const { _id: productId, technicianCategory } = product;
    await TechnicianCategory.updateOne(
      { _id: technicianCategory.category_id },
      { $push: { products: productId } }
    );
    // in Category Product push end

    const result = await product.save();

    res.status(200).json({
      status: "success",
      message: "Product Upload Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Something is Wrong",
      error: error.message,
    });
  }
};
exports.updateTechProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    // console.log(req?.files)
    const categoryParse = JSON.parse(req.body.technicianCategory);

    const { id } = req.params;

    const updateData = {
      technicianProductName: req.body.technicianProductName,
      technicianProductPrice: req.body.technicianProductPrice,
      technicianCategory: {
        categoryName: categoryParse.categoryName,
        category_id: categoryParse.category_id,
      },
    };

    const result = await TechnicianProduct.updateOne(
      { _id: id },
      { $set: updateData },
      { runValidators: true }
    );
    res.status(200).json({
      status: "success",
      message: "Data updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not updated",
      error: error.message,
    });
  }
};

exports.deleteTechProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imageData = req.body.image[0].split("\\")[2];
    const pdfData = req.body.productPdf[0].split("\\")[2];

    fs.readdir(dirPath, (err, files) => {
      const fileData = files.find((item) => item === imageData);

      fs.stat(`./public/uploads/${fileData}`, function (err, stats) {
        if (err) {
          return;
        }

        fs.unlink(`./public/uploads/${fileData}`, function (err) {
          if (err) return;
        });
      });
    });
    fs.readdir(dirPath, (err, pdfFiles) => {
      const pdfFile = pdfFiles.find((item) => item === pdfData);

      fs.stat(`./public/uploads/${pdfFile}`, function (err, stats) {
        if (err) {
          return;
        }

        fs.unlink(`./public/uploads/${pdfFile}`, function (err) {
          if (err) return;
        });
      });
    });

    const result = await TechnicianProduct.findByIdAndDelete({ _id: id });

    await Category.findOneAndUpdate(
      { products: id },
      { $pull: { products: id } },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "delete Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not updated",
      error: error.message,
    });
  }
};
