const mongoose = require("mongoose");

// Schema Design
const shiftingOutOrderSchema = mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },

    fromUpazila: {
      type: String,
      required: true,
    },
    movingUpazila: {
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
