const mongoose = require("mongoose")



const albumSchema = new mongoose.Schema({
    AlbumId: {
        type: Number,
        required: true,
        unique: true
    },
    Title: {
        type: String,
        required: false,
        trim: true
    },
    ArtistId: {
        type: Number,
        required: false,
        unique: true
    }

});


const Album = mongoose.model('Album', albumSchema)

module.exports = { Album }