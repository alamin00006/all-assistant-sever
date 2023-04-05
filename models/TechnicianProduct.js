const mongoose = require("mongoose");
// Schema Design
const technicianSchema = mongoose.Schema(
  {
    technicianProductName: {
      type: String,
      required: true,
    },
    technicianProductPrice: {
      type: Number,
      required: true,
      min: [1, "Price can't be negative"],
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
      message: "Price must be an Integer",
    },
    technicianCategory: {
      categoryName: {
        type: String,
        required: true,
      },
      category_id: {
        type: ObjectId,
        ref: "TechnicianCategory",
        required: true,
      },
    },
    technicianProductImage: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TechnicianProduct = mongoose.model("TechnicianProduct", technicianSchema);

module.exports = TechnicianProduct;
