const express = require('express');
const router = express.Router();

const Movie = require('../Models/Movie');

//get all movies
router.get('/movie', async (request, response) => {
    try {
        const movie = await Movie.find();
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

//search
router.get('/movie/search', async (request, response) => {
    const { s } = request.query;

    const movie = await Movie.find({ $text: { $search: s } })

    response.send(movie);
})

//get movie by id
router.get('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

//get movie by released
router.get('/released/:released', async (request, response) => {
    try {
        const movie = await Movie.find({ released: { $eq: request.params.released } })
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'no movies' })
    }
});

//create movie using form
router.post('/movie', async (request, response) => {
    const movie = new Movie(request.body);
    await movie.save();
    response.send(movie);
});

//update movie
router.put('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        movie.title = request.body.title;
        movie.year = request.body.year;
        movie.runTime = request.body.runTime;
        movie.genre = request.body.genre;
        movie.classification = request.body.classification
        movie.shortPlot = request.body.shortPlot;
        movie.imageURL = request.body.imageURL;
        movie.actors = request.body.actors;
        movie.director = request.body.director;
        movie.dateTime = request.body.dateTime;
        movie.released = request.body.released;
        await movie.save();
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

//delete movie
router.delete('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        await movie.deleteOne();
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

module.exports = router;