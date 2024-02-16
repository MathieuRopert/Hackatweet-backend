const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    date: Date,
    content: String,
    Trend: [String],
    NumberLikes: [Number],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    

})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;