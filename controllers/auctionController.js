// controllers/productController.js

const Product = require("../models/auctionModel");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dm0goeyr2",
  api_key: "596221485894732",
  api_secret: "SCt8hB1YAV0FGoxSpaX-F_RGL8Y",
});

// Configure Multer to use Cloudinary as the storage engine
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "auctionproduct", // Set your desired folder name
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

// const parser = multer({ storage: storage });
module.exports.parser = multer({ storage: storage });

// Add more methods as needed

exports.createProduct = async (req, res) => {
  try {
    const { title, description, startingBid, endDate } = req.body;
    const product = new Product({
      title,
      description,
      startingBid,
      endDate,
    });

    if (req.file) {
      // If an image is uploaded, set the Cloudinary URL in the product model
      product.image = req.file.path;
    }

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Get all products from the database
    res.status(200).json(products); // Return products as JSON
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
