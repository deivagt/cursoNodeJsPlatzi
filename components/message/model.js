const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

// Model: Indica cual es el esquema y con que nombre guardarlo

const model = mongoose.model('Messages', mySchema);
module.exports = model;