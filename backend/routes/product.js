// express and api router for open_link
// const { Category } = require('../models/category');
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

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false, message: "product cannot be found" })
    }

    res.json({ success: "ok", statusCode: 200, product })
})

router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
    )

    if (!product) {
        return res.status(404).send("product couldn't be updated")
    }
    res.send({ success: "ok", status: 201, product })

})

router.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(404).json({ success: false, message: "category not found" });
    }
    return res.status(200).json({ success: true, messag: "category has been deleted" })
})

router.post(`/`, async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category) {
        return res.status(400).json({ success: false, message: "Invalid Category" })
    }
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

    if (!product) {
        return res.status(500).json({ success: false, message: "product cannot be created" })
    }
    return res.status(201).json({ success: "ok", status: 200, product })
})

module.exports = router;