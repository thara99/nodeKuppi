const express = require("express");
const router = express.Router();
const shopsController = require("../Controllers/shopsController");
const authMiddleware = require("../Middleware/authMiddleware");
const authUserLevelMiddleware = require("../Middleware/authUserLevelMiddleware");

// CRUD Routes with authentication middleware
router.get(
  "/shops",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.getAllShops
); // Read all
router.get(
  "/shops/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.getShopById
); // Read one
router.post(
  "/shops",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.createShop
); // Create
router.put(
  "/shops/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.updateShop
); // Update
router.delete(
  "/shops/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.deleteShop
); // Delete

module.exports = router;
