const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Artist, artist } = require('../models/artists');


const router = express.Router()

//artists by id

router.get("/artists/:ArtistId", passport.authenticate('jwt', { session: false }), (req, res) => {
    Artist.findOne({ ArtistId: parseInt(req.params.ArtistId) }, function (err, artist) {
        if (err) {
            res.status(404).json({
                message: "artist not found, try again",
            });
        } else {
            res.json(artist)
        }
    });
})



module.exports = router
