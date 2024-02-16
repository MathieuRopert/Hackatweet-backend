var express = require('express');
var router = express.Router();
require('../models/connexion');
const Tweet = require('../models/tweet')
const User = require('../models/users');

router.get('/', (req, res) => {
    Tweet.find().then(data => {
        res.json({ result: true, Tweet: data })
    });
});

router.post('/addtweet/:token', (req, res) => {
    let regExp = /\#\w*/g;
    const trendTweet = Array.from(req.body.content.matchAll(regExp)).map(match => match[0])
    User.findOne({ token: req.params.token })
        .then(data => {
            console.log(data)
            const newTweet = new Tweet({
                date: Date.now(),
                content: req.body.content,
                Trend: trendTweet,
                NumberLikes: [],
                user: data.id,
            });
            newTweet.save().then(newDoc => {
                res.json({ result: true, content: newDoc.content, trend: newDoc.Trend })
                console.log('ok')
            })
        })
});

router.delete('/:tweets', (req, res) => {
    Tweet.deleteOne({ tweets: req.params.id })
    res.json({ result: true, message: 'Tweet as been delete ' })
});

module.exports = router;