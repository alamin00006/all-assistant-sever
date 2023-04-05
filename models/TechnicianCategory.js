const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const technicianCategorySchema = mongoose.Schema(
  {
    products: [
      {
        type: ObjectId,
        ref: "TechnicianProduct",
      },
    ],
    name: {
      type: String,
      required: [true, "Please Provide Category Name"],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const TechnicianCategory = mongoose.model(
  "TechnicianCategory",
  technicianCategorySchema
);
module.exports = TechnicianCategory;
