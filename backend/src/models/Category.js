const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    news: [{ type: mongoose.Schema.Types.ObjectId, ref: 'News' }]
});

module.exports = mongoose.model('Category', categorySchema);