const productModel = require("../models/productModel");

const addProductController = async (req, res) => {
    try {
        const products = req.body; // Assuming the body is an array of products
        
        // Check if the request body is an array
        if (!Array.isArray(products)) {
            return res.status(400).json({ message: "Request body should be an array of products" });
        }

        // Save each product individually
        for (let product of products) {
            const newProduct = new productModel(product);
            await newProduct.save();
        }

        res.status(201).json({ message: "Products added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding products", error: error.message });
    }
};

module.exports = addProductController;
