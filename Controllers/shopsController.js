const Shop = require("../Models/shops");

class ShopsController {
  // Get all shops
  async getAllShops(req, res) {
    try {
      const shops = await Shop.find();
      res.status(200).json(shops);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a single shop by ID
  async getShopById(req, res) {
    try {
      const shop = await Shop.findById(req.params.id);
      if (!shop) {
        return res.status(404).json({ message: "Shop not found" });
      }
      res.status(200).json(shop);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Create a new shop
  async createShop(req, res) {
    const shop = new Shop(req.body);
    try {
      const newShop = await shop.save();
      res.status(201).json(newShop);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Update an existing shop
  async updateShop(req, res) {
    try {
      const updatedShop = await Shop.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedShop) {
        return res.status(404).json({ message: "Shop not found" });
      }
      res.status(200).json(updatedShop);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Delete a shop
  async deleteShop(req, res) {
    try {
      const deletedShop = await Shop.findByIdAndDelete(req.params.id);
      if (!deletedShop) {
        return res.status(404).json({ message: "Shop not found" });
      }
      res.status(200).json({ message: "Shop deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ShopsController();
