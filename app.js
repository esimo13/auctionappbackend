// app.js or index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const auctionRoutes = require("./routes/auctionRoutes");

const app = express();

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/auctionApp");
mongoose.connect(
  "mongodb+srv://auctionapp:auctionapp@cluster0.4sidi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware
// app.use(
//   cors({
//     origin: "http://localhost:5173", // React's default development server
//   })
// );
app.use(cors());
app.use(bodyParser.json());

// Use auction routes
app.use("/api/auctions", auctionRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`Server is running on port ${PORT}`);
});
