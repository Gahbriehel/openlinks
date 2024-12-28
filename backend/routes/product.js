// express and api router for open_link
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

router.post(`/`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then((createdProduct => {
        res.status(201).json({ success: "ok", status: 200, createdProduct })
    }))
        .catch((error) => {
            res.status(500).json({ error: error, success: "fail" })
        })
})

module.exports = router;