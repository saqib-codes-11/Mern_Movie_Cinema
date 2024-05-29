const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    adult: {
        type: Number,
        minlength: 1,
        required: true,
    },
    child: {
        type: Number,
        minlength: 1,
        required: true,
    },
    senior: {
        type: Number,
        minlength: 1,
        required: true,
    }
});

module.exports = mongoose.model("Prices", priceSchema);