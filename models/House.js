const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// Schema Design
const houseSchema = mongoose.Schema(
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

    spaceSize: {
      type: Number,
      required: true,
      min: [1, "Space Size Info can't be negative"],
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
    },
    commonBathRoom: {
      type: Number,
      min: [0, "Common Bath Room Info can't be negative"],
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
      message: "Space Size Info must be an Integer",
      default: "N/A",
    },
    propertyCondition: {
      type: String,
      required: true,
      enum: {
        values: ["Renovated", "Brand New"],
        message: "Property Condition can't be {VALUE}",
      },
    },
    facing: {
      type: String,
      required: true,
      enum: {
        values: ["East", "West", "North", "South"],
        message: "facing can't be {VALUE}",
      },
    },
    availableFrom: {
      type: String,
      required: true,
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
        values: ["Yes", "No"],
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
    storeRoom: {
      type: String,
      required: true,
      enum: {
        values: ["Yes", "No"],
        message: "Store Room can't be {VALUE}",
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

    categoryName: {
      type: String,
      required: true,
    },
    houseDetailsAddress: {
      type: String,
      required: true,
    },
    houseImage: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const House = mongoose.model("House", houseSchema);

module.exports = House;

// [
//     '{{repeat(5, 7)}}',
//     {
//       bedRoomInfo: 2,
//       floorLevel: 'Ground Floor',
//       spaceSize: 500,
//       commonBathRoom: 2,
//       attachedBathRoom: 1,
//       balcony: 1,
//       propertyCondition: 'Brand New',
//       facing: "East",
//       availableFrom: "12/03/2022",
//       rentPriceTitle: "Fixed",
//       rentPrice: 8000,
//       deposit: 8000,
//       discount: 5,
//       status: "Available",
//       kitchen: "Yes",
//       diningSpace: "Yes",
//       furnishing: "No",
//       gasSupply: "Yes",
//       ccTvCamera: "Yes",
//       storeRoom: "Yes",
//       lift: "Yes",
//       waterSupply: "Yes",
//       securityGuard: "Yes",
//       ipsConnection: "Yes",
//       parkingSpace: "Bike",
//       floorType: "Tilesed",
//       category:{
//         categoryName:"Family",
//         category_id:"12512541264"
//       },
//       houseImage:["https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/pa2ckevjxzlymcrdue2s"]
//     }
//   ]
