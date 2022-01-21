const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Album, album } = require('../models/albums');


const router = express.Router();


//albums by id

router.get("/albums/:AlbumId", passport.authenticate('jwt', { session: false }), (req, res) => {
    Album.findOne({ AlbumId: parseInt(req.params.AlbumId) }, function (err, album) {
        if (err) {
            res.status(404).json({
                message: "album not found, try again",
            });
        } else {
            res.json(album)
        }
    });
})

//**TESTING ALBUM GET ALL */

router.get("/albums", passport.authenticate('jwt', { session: false }), (req, res) => {
    Album.find({}, function (err, album) {
        if (err) {
            res.status(404).json({
                message: "album not found, try again",
            });
        } else {
            res.json(album)
        }
    });
})


module.exports = router;
