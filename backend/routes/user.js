// express and api router for open_link
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const users = await User.find();

    if (!users) {
        res.status(500).json({ success: false })
    }

    res.json({ success: "ok", statusCode: 200, users })
})

router.post(`/`, async (req, res) => {
    let user = new User({
        ...req.body
    });

    user = await user.save();

    if (!user) {
        return res.status(404).send("user couldn't be created")
    }
    res.send({ success: "ok", status: 201, user })
});
module.exports = router;