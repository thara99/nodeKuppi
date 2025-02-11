const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const shopRoutes = require("./Routes/shopRoutes");
const itemRoutes = require("./Routes/itemRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", shopRoutes);
app.use("/api", itemRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const crypto = require("crypto");
const secret = crypto.randomBytes(64).toString("hex");
console.log(secret);
