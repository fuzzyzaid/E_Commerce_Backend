const productModel=require("../models/productModel");

const productController = async (req, res) => {

    try {
        const products = await productModel.find();
        res.json(products);
      } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
      }
    
}

module.exports = productController;