// express and api router for open_link
const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const categories = await Category.find();

    if (!categories) {
        res.status(500).json({ success: false })
    }

    res.json({ success: "ok", statusCode: 200, categories })
})

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(500).json({ success: false, message: "The category was not found" })
    }
    res.status(200).send(category);
});

router.post(`/`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        image: req.body.image
    });

    category = await category.save();

    if (!category) {
        return res.status(404).send("category couldn't be created")
    }
    res.send({ success: "ok", status: 201, category })
});

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
    )

    if (!category) {
        return res.status(404).send("category couldn't be updated")
    }
    res.send({ success: "ok", status: 201, category })

})

router.delete('/:id', (req, res) => {
    // Having issues deleting from Mongo Atlas
    Category.findByIdAndDelete(req.params.id)
        .then(category => {
            if (category) {
                return res.status(200).json({ success: true, message: "category has been deleted" })
            } else {
                return res.status(404).json({ success: false, message: "category not found" });
            }
        })
        .catch(err => {
            return res.status(400).json({ success: false, error: err });
        });
});

module.exports = router;