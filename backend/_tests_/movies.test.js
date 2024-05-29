const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Movie = require('../Models/Movie');
chai.use(chaiHttp);

const app = require('../index')

describe(`Testing all the movie routes`, () => {
    const createMovie = new Movie({
        title: 'test_movie',
        year: '2021',
        runTime: '90 mins',
        genre: 'Action, Adventure, Comedy',
        shortPlot: 'This is a short plot of the film.',
        imageURL: 'image.jpg',
        actors: [
            {
                name: 'actor_one',
                role: 'role_one',
                image: 'one.jpg'
            },
            {
                name: 'actor_two',
                role: 'role_two',
                image: 'two.jpg'
            },
            {
                name: 'actor_three',
                role: 'role_three',
                image: 'three.jpg'
            }
        ],
        director: 'director_name',
        dateTime: [
            {
                day: 'Monday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Tuesday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Wednesday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Thursday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Friday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
        ],
        released: false,
        classification: 'U'
    })
    const updatedMovie = new Movie({
        title: 'updated_test_movie',
        year: '2022',
        runTime: '100 mins',
        genre: 'Action, Adventure, Horror',
        shortPlot: 'This is a updated short plot of the film.',
        imageURL: 'updated image.jpg',
        actors: [
            {
                name: 'updated actor_one',
                role: 'role_one',
                image: 'one.jpg'
            },
            {
                name: 'actor_two',
                role: 'role_two',
                image: 'two.jpg'
            },
            {
                name: 'actor_three',
                role: 'role_three',
                image: 'three.jpg'
            }
        ],
        director: 'updated director_name',
        dateTime: [
            {
                day: 'updated Monday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Tuesday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Wednesday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Thursday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
            {
                day: 'Friday',
                timeOfMovie: [
                    {
                        time: '11:00'
                    },
                    {
                        time: '13:00'
                    },
                    {
                        time: '15:00'
                    }
                ]
            },
        ],
        released: false,
        classification: 'U'
    })

    let testMovieID = "";

    it(`Should return all the movies`, (done) => {

        chai.request(app)
            .get("/movie")
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie).to.contain.keys("_id", "title", "actors");
                })
                done();
            })
    })

    it(`should respond with the objects which has the genre animation`, (done) => {

        chai.request(app)
            .get("/movie/search")
            .query({ s: 'animation' })
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.have.lengthOf(2);
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                })
                done();
            })
    })

    it(`should respond with movies that are released`, (done) => {

        chai.request(app)
            .get("/released/true")
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.have.lengthOf(6);
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie.released).to.be.true;
                })
                done();
            })
    })

    it(`should respond with movie by the ID`, (done) => {

        const movieID = "60e4200f7a5d6042284b2f65";

        chai.request(app)
            .get(`/movie/${movieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.be.a("object");
                expect(response.body.title).to.contain("Demon Slayer: Mugen Train");

                done();
            })
    })

    it(`should respond with movie does not exist`, (done) => {

        const movieID = "60e4200f7a5d6042284";

        chai.request(app)
            .get(`/movie/${movieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response).to.not.be.null;
                expect(response.body.error).to.contain("movie does not exist");
                done();
            })
    })

    it(`should respond with the movie object when its created`, (done) => {
        chai.request(app)
            .post(`/movie`)
            .send(createMovie)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.contain.key("_id");
                testMovieID = response.body._id;
                done();
            })
    })

    it(`should respond with the updated changes`, (done) => {
        chai.request(app)
            .put(`/movie/${testMovieID}`)
            .send(updatedMovie)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body.title).to.contain("updated_test_movie");
                done();
            })
    })

    it(`should respond with error when wrong ID is entered`, (done) => {
        chai.request(app)
            .put(`/movie/6565677`)
            .send(updatedMovie)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response.body.error).to.contain("movie does not exist");
                done();
            })
    })

    it(`should respond with the deleted movie`, (done) => {
        chai.request(app)
            .delete(`/movie/${testMovieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body.title).to.contain("updated_test_movie");
                done();
            })
    })

    it(`should respond with error with a wrong ID`, (done) => {
        chai.request(app)
            .delete(`/movie/34534534`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response.body.error).to.contain("movie does not exist");
                done();
            })
    })

})