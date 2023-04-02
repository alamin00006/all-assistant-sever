const ShiftingCity = require("../models/ShiftingCity");

exports.getShiftingOrders = async (req, res, next) => {
  try {
    const orders = await ShiftingCity.find({});

    res.status(200).json({
      status: "success",
      message: "All Order get Success",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Order not found",
      error: error.message,
    });
  }
};

exports.createSiftingOrder = async (req, res) => {
  try {
    console.log(req.body);

    const order = new ShiftingCity(req.body);

    const result = await order.save();

    res.status(200).json({
      status: "success",
      message: "Thanks For Your Order",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "order not complete",
      error: error.message,
    });
  }
};

exports.deleteShiftingOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ShiftingCity.findByIdAndDelete({ _id: id });

    res.status(200).json({
      status: "success",
      message: "Order delete Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Order not Delete",
      error: error.message,
    });
  }
};
