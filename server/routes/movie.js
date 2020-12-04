var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello index ');
});

router.get('/get-all-movies', function (req, res, next) {
    let moviesList = [
        {
            "Id": 1,
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image1",

        },
        {
            "Id": 2,
            "Title": "Avengers: Black Panther",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image2",

        },
        {
            "Id": 3,
            "Title": "Avengers: Civil War",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image3",

        },
        {
            "Id": 4,
            "Title": "Avengers: SpiderMan",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image4",

        },
        {
            "Id": 5,
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image5",

        },
        {
            "Id": 6,
            "Title": "Avengers: Black Panther",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image6",

        },
        {
            "Id": 7,
            "Title": "Avengers: Civil War",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image7",

        },
        {
            "Id": 8,
            "Title": "Avengers: SpiderMan",
            "Year": "2019",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "http://placehold.it/350x350&text=image8",

        }
    ]
    res.send({ err: false, data: moviesList })
});

module.exports = router;
