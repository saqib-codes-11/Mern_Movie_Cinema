const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    movieID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true
    }],
    author: {
        type: String,
        required: true,
        minlength: 2
    },
    rate: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10

    },
    comment: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 140
    }
});

module.exports = mongoose.model("Comments", commentSchema);