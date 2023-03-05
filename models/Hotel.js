const mongoose = require("mongoose");

// Schema Design
const hotelSchema = mongoose.Schema(
  {
    bedRoomInfo: {
      type: Number,
      required: true,
      min: [1, "Bed Room Info can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Bed Room Info must be an Integer",
    },
    floorLevel: {
      type: String,
      required: true,
    },

    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    upazila: {
      type: String,
      required: true,
    },
    totalRentRoom: {
      type: String,
      required: true,
    },
    attachedBathRoom: {
      type: Number,
      min: [0, "Attached Bath Room Info can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Space Size Info must be an Integer",
      default: "N/A",
    },

    balcony: {
      type: Number,
      min: [0, "Balcony Info can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Balcony Info must be an Integer",
      default: "N/A",
    },
    rentPriceTitle: {
      type: String,
      required: true,
      enum: {
        values: ["Fixed", "Negotiable"],
        message: "Rent Price Title can't be {VALUE}",
      },
    },
    rentPrice: {
      type: Number,
      required: true,
      min: [1, "Rent Price can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Rent Price must be an Integer",
    },
    deposit: {
      type: Number,
      required: true,
      min: [1, "deposit can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "deposit must be an Integer",
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "Discount can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Discount must be an Integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["Available", "Rented"],
        message: "status can't be {VALUE}",
      },
    },
    kitchen: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "kitchen can't be {VALUE}",
      },
    },
    diningSpace: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Dining Space can't be {VALUE}",
      },
    },
    furnishing: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Furnishing can't be {VALUE}",
      },
    },
    gasSupply: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No", "Cylinder"],
        message: "Gas Supply can't be {VALUE}",
      },
    },
    ccTvCamera: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "CCTV Camera can't be {VALUE}",
      },
    },
    lift: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Lift can't be {VALUE}",
      },
    },
    waterSupply: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Water Supply can't be {VALUE}",
      },
    },
    securityGuard: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Security Guard can't be {VALUE}",
      },
    },
    ipsConnection: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "IPS Connection can't be {VALUE}",
      },
    },
    parkingSpace: {
      type: String,
      required: true,
      enum: {
        values: ["Car & Bike Both", "Bike"],
        message: "Parking Space can't be {VALUE}",
      },
    },
    floorType: {
      type: String,
      required: true,
      enum: {
        values: ["Tilesed", "Normal"],
        message: "Floor Type can't be {VALUE}",
      },
    },

    hotelDetailsAddress: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
