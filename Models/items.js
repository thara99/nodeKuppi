const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
