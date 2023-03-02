const House = require("../models/House");
// const Category = require("../models/Category");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../public/uploads");

exports.createHouse = async (req, res) => {
  try {
    const imgPath = req?.files?.houseImage?.map((img) => img.path);
    const categoryParse = JSON.parse(req.body.category);

    const house = new House({
      bedRoomInfo: req.body.bedRoomInfo,
      floorLevel: req.body.floorLevel,
      division: req.body.division,
      district: req.body.district,
      upazila: req.body.upazila,
      spaceSize: req.body.spaceSize,
      commonBathRoom: req.body.commonBathRoom,
      attachedBathRoom: req.body.attachedBathRoom,
      balcony: req.body.balcony,
      propertyCondition: req.body.propertyCondition,
      facing: req.body.facing,
      availableFrom: req.body.availableFrom,
      rentPriceTitle: req.body.rentPriceTitle,
      rentPrice: req.body.rentPrice,
      deposit: req.body.deposit,
      discount: req.body.discount,
      status: req.body.status,
      kitchen: req.body.kitchen,
      diningSpace: req.body.diningSpace,
      furnishing: req.body.furnishing,
      gasSupply: req.body.gasSupply,
      ccTvCamera: req.body.ccTvCamera,
      storeRoom: req.body.storeRoom,
      lift: req.body.lift,
      waterSupply: req.body.waterSupply,
      securityGuard: req.body.securityGuard,
      ipsConnection: req.body.ipsConnection,
      parkingSpace: req.body.parkingSpace,
      floorType: req.body.floorType,
      category: {
        categoryName: categoryParse.categoryName,
        category_id: categoryParse.category_id,
      },

      houseImage: imgPath,
    });

    // in Category product Push start

    //  const {_id:productId, category} = product;
    //  await Category.updateOne({_id:category.
    //     category_id},
    //     {$push:{products:productId}})
    // in Category Product push end

    const result = await house.save();

    res.status(200).json({
      status: "success",
      message: "House Upload Successfully",
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

exports.getHouses = async (req, res, next) => {
  try {
    const products = await House.find({});

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

exports.getHouseDetails = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await House.findById(id);
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
