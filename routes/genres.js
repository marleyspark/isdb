const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Genre, genres } = require('../models/genres');


const router = express.Router()


//info for genres by id

router.get("/genres", passport.authenticate('jwt', { session: false }), (req, res) => {
    Genre.find({}, function (err, genres) {
        if (err) {
            res.status(400).json({
                message: "genre not found, try again",
            })
        } else if (!genres) {
            res.status(404).json({ message: "genre not found, try again" })

        } else {
            res.json(genres)
        }
    });
})




module.exports = router
