const mongoose = require("mongoose");

// Schema Design
const shiftingOutOrderSchema = mongoose.Schema(
  {
    fromZila: {
      type: String,
      required: true,
    },
    movingZila: {
      type: String,
      required: true,
    },
    shiftingDate: {
      type: Date,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const ShiftingOutCity = mongoose.model(
  "ShiftingOutCity",
  shiftingOutOrderSchema
);

module.exports = ShiftingOutCity;
