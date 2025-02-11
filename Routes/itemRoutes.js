const express = require("express");
const router = express.Router();
const shopsController = require("../Controllers/itemController");
const authMiddleware = require("../Middleware/authMiddleware");
const authUserLevelMiddleware = require("../Middleware/authUserLevelMiddleware");

// CRUD Routes with authentication middleware
router.get(
  "/items",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.getAllItems
); // Read all
router.get(
  "/items/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.getItemById
); // Read one
router.post(
  "/items",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.createItem
); // Create
router.put(
  "/items/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.updateItem
); // Update
router.delete(
  "/items/:id",
  authMiddleware,
  authUserLevelMiddleware,
  shopsController.deleteItem
); // Delete

module.exports = router;
