// models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startingBid: {
    type: Number,
    required: true,
  },
  currentBid: {
    type: Number,
    default: 0,
  },
  image: {
    type: String, // Cloudinary image URL
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
