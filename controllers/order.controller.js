const Order = require("../models/Order");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});

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

exports.createOrder = async (req, res) => {
  try {
    console.log(req.body);

    const order = new Order(req.body);

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

exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Order.findByIdAndDelete({ _id: id });

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
