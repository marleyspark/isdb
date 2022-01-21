const mongoose = require("mongoose")


const tracksSchema = new mongoose.Schema({
    TrackId: {
        type: Number,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    AlbumId: {
        type: String,
        required: true,
        unique: true
    },

    MediaTypeId: {
        type: Number,
        required: true

    },
    GenreId: {
        type: String,
        required: true,
        unique: true
    },
    Composer: {
        type: String,
        required: true,
        trim: true

    },
    Milliseconds: {
        type: Number,
        required: true,

    },
    Bytes: {
        type: Number,
        required: true
    },
    UnitPrice: {
        type: Number,
        required: true
    }

});




const Tracks = mongoose.model('Tracks', tracksSchema)

module.exports = { Tracks }