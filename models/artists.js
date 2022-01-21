const mongoose = require("mongoose")


const artistsSchema = new mongoose.Schema({
    ArtistId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }

});



const Artist = mongoose.model('Artist', artistsSchema)

module.exports = { Artist }