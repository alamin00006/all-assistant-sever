const TechnicianCategory = require("../models/TechnicianCategory");

exports.createTechCategory = async (req, res) => {
  try {
    const category = new TechnicianCategory(req.body);
    const result = await category.save();

    res.status(200).json({
      status: "success",
      message: "Category inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Category not inserted",
      error: error.message,
    });
  }
};

exports.getTechCategories = async (req, res) => {
  try {
    const categories = await TechnicianCategory.find({});

    res.status(200).json({
      status: "success",
      message: "Category get Success",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "category not found",
      error: error.message,
    });
  }
};

exports.getTechCategoryDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const categoryTechProduct = await TechnicianCategory.findById(id).populate(
      "products"
    );

    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: categoryTechProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};
