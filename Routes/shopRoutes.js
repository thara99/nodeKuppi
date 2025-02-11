const express = require("express");
const router = express.Router();
const shopsController = require("../Controllers/shopsController");
const authMiddleware = require("../Middleware/authMiddleware");

// CRUD Routes with authentication middleware
router.get("/shops", authMiddleware, shopsController.getAllShops); // Read all
router.get("/shops/:id", authMiddleware, shopsController.getShopById); // Read one
router.post("/shops", authMiddleware, shopsController.createShop); // Create
router.put("/shops/:id", authMiddleware, shopsController.updateShop); // Update
router.delete("/shops/:id", authMiddleware, shopsController.deleteShop); // Delete

module.exports = router;
