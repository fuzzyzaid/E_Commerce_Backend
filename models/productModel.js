const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    productId: Number,
    category: String,
    price: Number,
    description: String,
    image: String,
  });
  

  const productModel = mongoose.model("Product", productSchema);
  module.exports=productModel