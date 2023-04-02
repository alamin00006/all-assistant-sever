const mongoose = require("mongoose");

// Schema Design
const shiftingOrderSchema = mongoose.Schema(
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
const ShiftingCity = mongoose.model("ShiftingCity", shiftingOrderSchema);

module.exports = ShiftingCity;
