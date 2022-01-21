const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Tracks, tracks } = require('../models/tracks');


const router = express.Router()

//post new track

router.post('/tracks', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.body.Name && req.body.TrackId) {
        const tracks = new Tracks({
            TrackId: req.body.TrackId,
            Name: req.body.Name,
            AlbumId: req.body.AlbumId,
            MediaTypeId: req.body.MediaTypeId,
            GenreId: req.body.GenreId,
            Composer: req.body.Composer,
            Milliseconds: req.body.Milliseconds,
            Bytes: req.body.Bytes,
            UnitPrice: req.body.UnitPrice

        })
        try {
            const newTracks = await tracks.save()
            res.status(201).json(newTracks)
        } catch (err) {
            res.status(400).json({ message: err })
        }
    } else {
        res.status(400).json({ message: "Not added. You need 'TrackId, Name, AlbumId, MediaTypeId, GenreId, Composer, Millieseconds, Bytes and UnitPrice" })
    }


})

//info for tracks by id

router.get("/tracks/:TrackId", passport.authenticate('jwt', { session: false }), (req, res) => {
    Tracks.findOne({ TrackId: parseInt(req.params.TrackId) }, function (err, tracks) {
        if (err) {
            res.status(400).json({
                message: "track not found try again or add one",
            })
        } else if (!tracks) {
            res.status(404).json({ message: "track not found, try again or add one" })

        } else {
            res.json(tracks)
        }
    });
})




module.exports = router
