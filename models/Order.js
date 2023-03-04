const mongoose = require("mongoose");
// Schema Design
const orderSchema = mongoose.Schema(
  {
    orderHouse: {
      type: Array,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please Provide Your Name"],
    },

    phone: {
      type: String,
      required: [true, "Please Provide Your Phone Number"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
