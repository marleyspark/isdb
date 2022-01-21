const mongoose = require("mongoose")


const genresSchema = new mongoose.Schema({
    GenreId: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
        trim: true
    }

});



const Genre = mongoose.model('Genre', genresSchema)

module.exports = { Genre }