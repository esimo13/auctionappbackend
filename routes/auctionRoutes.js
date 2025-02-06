// routes/productRoutes.js

const express = require("express");
const router = express.Router();
const auctionController = require("../controllers/auctionController");
// const parser = require("../controllers/auctionController").parser;
const { parser } = require("../controllers/auctionController");

const multer = require("multer");

// Configure Multer to handle file uploads
const upload = multer();

// Add more routes as needed
// router.post("/create", upload.single("image"), auctionController.createProduct);

// router.post("/create", parser.single("image"), auctionController.createProduct);
router.post(
  "/create",
  parser.single("image"),
  (req, res, next) => {
    // Log the file data to verify
    console.log("Uploaded File:", req.file); // This will log the file data to the console

    // Pass the request to your controller
    next();
  },
  auctionController.createProduct
);

// router.post("/create", parser.single("image"), auctionController.createProduct);

router.get("/", auctionController.getProducts);

module.exports = router;
