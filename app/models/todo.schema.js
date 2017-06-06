let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
    isChecked: {type: Boolean, default: false}

}, {collection: 'todos'});

module.exports = {
    todo: mongoose.model('Todo', todoSchema)
};