var router = require('express').Router();

var movies = require('../data/movies.json');

router.get('/', function (req, res) {
    // send back 5 movies only per request
    // look for a PAGE parameter which defaults to 1
    // e.g. http://localhost:5000/movies?page=1
    if (req.query.page && req.query.page <= 20 && req.query.page >=1 ) {
        var startindex = (+req.query.page - 1) * 5;
        res.status(200).json(movies.slice(startindex, startindex + 5));
    } else {
        res.status(200).json(movies.slice(0, 5));
    }
});

module.exports = router;