const House = require("../models/House");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../public/uploads");

exports.createHouse = async (req, res) => {
  try {
    const imgPath = req?.files?.image?.map((img) => img.path);
    const house = new House({
      bedRoomInfo: req.body.bedRoomInfo,
      floorLevel: req.body.floorLevel,
      division: req.body.division,
      district: req.body.district,
      upazila: req.body.upazila,
      totalRentRoom: req.body.totalRentRoom,
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
      categoryName: req.body.categoryName,
      houseDetailsAddress: req.body.houseDetailsAddress,
      image: imgPath,
    });

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
    const {
      division,
      district,
      upazila,
      categoryName,
      rentPrice,
      totalRentRoom,
    } = req.query;
    console.log(req.query);

    if ((division, district, upazila)) {
      const query =
        ({ division: division }, { district: district }, { upazila: upazila });
      const houses = await House.find(query)
        .where({
          categoryName: categoryName,
        })
        .where("rentPrice")
        .gte(rentPrice)
        .where({ totalRentRoom: totalRentRoom });

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: houses,
      });
    } else if ((categoryName, rentPrice, totalRentRoom)) {
      const houses = await House.find({})
        .where({
          categoryName: categoryName,
        })
        .where("rentPrice")
        .gte(rentPrice)
        .where({ totalRentRoom: totalRentRoom });

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: houses,
      });
    } else {
      const houses = await House.find({});

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: houses,
      });
    }
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

    const house = await House.findById(id);
    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: house,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};

exports.updateHouse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updateHouse = {
      bedRoomInfo: req.body.bedRoomInfo,
      floorLevel: req.body.floorLevel,
      division: req.body.division,
      district: req.body.district,
      upazila: req.body.upazila,
      totalRentRoom: req.body.totalRentRoom,
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
      categoryName: req.body.categoryName,
      houseDetailsAddress: req.body.houseDetailsAddress,
    };

    const result = await House.updateOne(
      { _id: id },
      { $set: updateHouse },
      { runValidators: true }
    );
    res.status(200).json({
      status: "success",
      message: "House updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "House not updated",
      error: error.message,
    });
  }
};

exports.deleteHouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await House.findById({ _id: id });

    const houseImgData = result?.image.map((img) => img.split("\\")[2]);

    Promise.all(
      houseImgData.map(
        (img) =>
          new Promise(() => {
            try {
              fs.unlink(`./public/uploads/${img}`, function (err) {
                if (err) return;
              });
            } catch (err) {
              res.status(400).json({
                status: "failed",
                message: "image not delete",
                error: err.message,
              });
            }
          })
      )
    );

    const house = await House.findByIdAndDelete({ _id: id });

    res.status(200).json({
      status: "success",
      message: "delete Successfully",
      data: house,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not delete",
      error: error.message,
    });
  }
};
