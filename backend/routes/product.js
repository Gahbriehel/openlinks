// express and api router for open_link
const { Category } = require('../models/category');
const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const products = await Product.find();

    if (!products) {
        res.status(500).json({ success: false })
    }

    res.json({ success: "ok", statusCode: 200, products })
})

router.post(`/`, async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category) {
        return res.status(400).json({ success: false, message: "Invalid Category" })
    }
    console.log("Here 2")
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,
        images: req.body.images,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock,
        dateCreated: req.body.dateCreated
    })
    product = await product.save();
    console.log("Here")

    if (!product) {
        return res.status(500).json({ success: false, message: "product cannot be created" })
    }
    console.log("Here 3")
    return res.status(201).json({ success: "ok", status: 200, product })
})

module.exports = router;