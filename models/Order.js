const mongoose = require("mongoose");
// Schema Design
const orderSchema = mongoose.Schema(
  {
    orderHouse: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please Provide Your Name"],
    },

    phone: {
      type: Number,
      required: [true, "Please Provide Your Phone Number"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
