const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    date: Date,

})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;