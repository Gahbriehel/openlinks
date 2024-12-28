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

router.post(`/`, (req, res) => {
    res.send()
})

module.exports = router;