const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Comment = require('../Models/Comment');
chai.use(chaiHttp);

const app = require('../index')

describe(`Testing all comment routes`, () => {

    const createComment = new Comment({
        movieID: '60e4211a7a5d6042284b2f7e',
        author: 'test_author',
        rate: '7',
        comment: 'This is a test comment.'
    })

    const updateComment = new Comment({
        movieID: '60e4211a7a5d6042284b2f7e',
        author: 'updated_test_author',
        rate: '8',
        comment: 'This is a updated test comment.'
    })

    let commentID = "";

    it(`Should return all the comments`, (done) => {
        chai.request(app)
            .get("/comment")
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((comment) => {
                    expect(comment).to.be.a("object");
                    expect(comment).to.contain.keys("_id", "author", "rate", "comment");
                })
                done();
            })
    })

    it(`Should return all the comments for f9 movie`, (done) => {
        const movieID = "60e41cf77a5d6042284b2f33";
        chai.request(app)
            .get(`/comment/${movieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((comment) => {
                    expect(comment).to.be.a("object");
                    comment.movieID.map((movieDetails) => {
                        expect(movieDetails._id).to.contain(movieID);
                    })
                })
                done();
            })
    })

    it(`should respond with comment does not exist`, (done) => {
        chai.request(app)
            .get(`/comment/7345y8374`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response.body.error).to.contain("comment does not exist");
                done();
            })
    })

    it(`Should return a object when a comment is created`, (done) => {
        chai.request(app)
            .post(`/comment/`)
            .send(createComment)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.contain.key("_id")
                expect(response.body.movieID).to.contain('60e4211a7a5d6042284b2f7e');
                commentID = response.body._id;
                done();
            })
    })

    it(`Should return a object when a comment is created`, (done) => {
        chai.request(app)
            .put(`/comment/${commentID}`)
            .send(updateComment)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body.movieID).to.contain('60e4211a7a5d6042284b2f7e');
                expect(response.body.author).to.contain('updated_test_author');
                done();
            })
    })

    it(`should respond with error when wrong ID is entered`, (done) => {
        chai.request(app)
            .put(`/comment/53535`)
            .send(updateComment)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response.body.error).to.contain("comment does not exist");
                done();
            })
    })

    it(`should respond with the deleted comment`, (done) => {
        chai.request(app)
            .delete(`/comment/${commentID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body.author).to.contain("updated_test_author");
                done();
            })
    })

    it(`should respond with error with a wrong ID`, (done) => {
        chai.request(app)
            .delete(`/comment/34534534`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response.body.error).to.contain("comment does not exist");
                done();
            })
    })
})