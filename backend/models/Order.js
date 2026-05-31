const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },

    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Order",
  orderSchema
);
