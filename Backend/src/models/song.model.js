const mongoose = require('mongoose')


const songSchema = new mongoose.Schema({
    url:{
        type: String,
        require: true
    },
    posterUrl: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true
    }
})

const songModel = mongoose.model("songs", songSchema)


module.exports = songModel