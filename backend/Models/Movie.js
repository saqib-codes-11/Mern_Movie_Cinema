const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    year: {
        type: Number,
        required: true,
        minlength: 4

    },
    runTime: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    shortPlot: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    actors: [{
        name: {
            type: String,
            required: true,
            minlength: 2
        },
        role: {
            type: String,
            required: true,
            minlength: 2
        },
        image: {
            type: String,
            required: true,
            minlength: 2
        }
    }],

    director: {
        type: String,
        required: true,
        minlength: 2
    },
    dateTime: [
        {
            day: {
                type: String
            },
            timeOfMovie: [
                {
                    time: {
                        type: String
                    }
                }
            ]
        }
    ],
    released: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model("Movies", movieSchema);