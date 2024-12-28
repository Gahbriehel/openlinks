// express and api router for open_link
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.get(`/`, async (req, res) => {
    const users = await User.find().select("-passwordHash");

    if (!users) {
        res.status(500).json({ success: false })
    }

    res.json({ success: "ok", statusCode: 200, users })
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select("-passwordHash");

    if (!user) {
        res.status(500).json({ success: false, message: "The user was not found" })
    }
    res.status(200).json({ success: true, user });
});

router.post(`/`, async (req, res) => {
    let user = new User({
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        ...req.body
    });

    user = await user.save();

    if (!user) {
        return res.status(404).send("user couldn't be created")
    }
    res.send({ success: "ok", status: 201, user })
});
module.exports = router;