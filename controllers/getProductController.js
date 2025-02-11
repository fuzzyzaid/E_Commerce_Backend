const productModel=require("../models/productModel");

const getProductController = async (req, res) => {

    try {
        const products = await productModel.find();
        res.json(products);
        console.log(products);
      } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
      }
    
}

module.exports = getProductController;