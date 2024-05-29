const express = require('express');
const router = express.Router();

const Comment = require('../Models/Comment');

//get all comments
router.get('/comment', async (request, response) => {
    try {
        const comment = await Comment.find().populate({ path: 'movieID', select: 'title' }).sort({ $natural: -1 });
        response.send(comment);
    } catch {
        response.status(404);
        response.send({ error: 'comment does not exist' })
    }
});

//get comments by movieID
router.get('/comment/:id', async (request, response) => {
    try {
        const comment = await Comment.find({ movieID: request.params.id }).populate({ path: 'movieID', select: 'title' }).sort({ $natural: -1 });
        response.send(comment);
    } catch {
        response.status(404);
        response.send({ error: 'comment does not exist' })
    }
});

//create comment using form
router.post('/comment', async (request, response) => {
    const comment = new Comment(request.body);
    await comment.save();
    response.send(comment);
});

//update comment
router.put('/comment/:id', async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        comment.movieID = request.body.movieID;
        comment.author = request.body.author;
        comment.rate = request.body.rate;
        comment.comment = request.body.comment;
        await comment.save();
        response.send(comment);
    } catch {
        response.status(404);
        response.send({ error: 'comment does not exist' })
    }
});

//delete comment
router.delete('/comment/:id', async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.deleteOne();
        response.send(comment);
    } catch {
        response.status(404);
        response.send({ error: 'comment does not exist' })
    }
});

module.exports = router;