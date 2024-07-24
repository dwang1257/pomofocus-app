const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean
    }
})

module.exports = mongoose.model('Item', itemSchema)