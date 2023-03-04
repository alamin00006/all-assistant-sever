const Hotel = require("../models/Hotel");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../public/uploads");

exports.createHotel = async (req, res) => {
  try {
    const imgPath = req?.files?.hotelImage?.map((img) => img.path);
    const hotel = new Hotel({
      bedRoomInfo: req.body.bedRoomInfo,
      floorLevel: req.body.floorLevel,
      division: req.body.division,
      district: req.body.district,
      upazila: req.body.upazila,
      totalRentRoom: req.body.totalRentRoom,
      attachedBathRoom: req.body.attachedBathRoom,
      balcony: req.body.balcony,
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
      lift: req.body.lift,
      waterSupply: req.body.waterSupply,
      securityGuard: req.body.securityGuard,
      ipsConnection: req.body.ipsConnection,
      parkingSpace: req.body.parkingSpace,
      floorType: req.body.floorType,
      hotelDetailsAddress: req.body.houseDetailsAddress,
      hotelImage: imgPath,
    });

    const result = await hotel.save();

    res.status(200).json({
      status: "success",
      message: "Hotel Upload Successfully",
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

exports.getHotels = async (req, res, next) => {
  try {
    const { division, district, upazila, rentPrice, totalRentRoom } = req.query;
    console.log(req.query);

    if ((division, district, upazila)) {
      const query =
        ({ division: division }, { district: district }, { upazila: upazila });
      const hotels = await Hotel.find(query)
        .where("rentPrice")
        .gte(rentPrice)
        .where({ totalRentRoom: totalRentRoom });

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: hotels,
      });
    } else if ((rentPrice, totalRentRoom)) {
      const hotels = await Hotel.find({})
        .where("rentPrice")
        .gte(rentPrice)
        .where({ totalRentRoom: totalRentRoom });

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: hotels,
      });
    } else {
      const hotels = await Hotel.find({});

      res.status(200).json({
        status: "success",
        message: "data get Success",
        data: hotels,
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

exports.getHotelDetails = async (req, res, next) => {
  try {
    const id = req.params.id;

    const hotel = await Hotel.findById(id);
    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: hotel,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};

exports.updateHotel = async (req, res, next) => {
  try {
    console.log(req.body);
    // console.log(req?.files)

    const { id } = req.params;

    const updateHotel = {
      bedRoomInfo: req.body.bedRoomInfo,
      floorLevel: req.body.floorLevel,
      division: req.body.division,
      district: req.body.district,
      upazila: req.body.upazila,
      totalRentRoom: req.body.totalRentRoom,
      attachedBathRoom: req.body.attachedBathRoom,
      balcony: req.body.balcony,
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
      lift: req.body.lift,
      waterSupply: req.body.waterSupply,
      securityGuard: req.body.securityGuard,
      ipsConnection: req.body.ipsConnection,
      parkingSpace: req.body.parkingSpace,
      floorType: req.body.floorType,
      hotelDetailsAddress: req.body.houseDetailsAddress,
    };

    const result = await Hotel.updateOne(
      { _id: id },
      { $set: updateHotel },
      { runValidators: true }
    );
    res.status(200).json({
      status: "success",
      message: "Hotel updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Hotel not updated",
      error: error.message,
    });
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Hotel.findById({ _id: id });

    const hotelImgData = result?.houseImage.map((img) => img.split("\\")[2]);

    Promise.all(
      hotelImgData.map(
        (img) =>
          new Promise(() => {
            try {
              fs.unlink(`./public/uploads/${img}`, function (err) {
                console.log();
                if (err) return;
              });
            } catch (err) {
              console.log(err);
            }
          })
      )
    );

    const house = await Hotel.findByIdAndDelete({ _id: id });

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
