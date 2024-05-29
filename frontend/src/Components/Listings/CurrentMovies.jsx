'use strict';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Movies.css';
import '../../CSS/Pages.css';

const CurrentMovies = () => {

    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const loadTime = 100;

    const getMovies = () => {
        axios.get('http://localhost:5000/released/true')
            .then((response) => {
                setLoaded(true);
                setMovieList(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getMovies();
    }, []);

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    if (!loaded) {
        return <p>Data is loading</p>
    }

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 className='landing-text'>Current Movies </h1>
                    <h3 className="lead" >Come to our cinema and watch these films right now!</h3>
                    <div>
                        <Row>
                            {movieList.map((movie) => (
                                <Col lg={4} xs={12} md={6} className="p-2">
                                    <div className="card-wrapper">
                                        <div className="content">
                                            <div className="face-front z-depth-2">
                                                <img className="movieImage" src={imageUpdater(movie.imageURL)} alt={movie.title} />
                                            </div>
                                            <div className="face-back z-depth-2 colorScheme">
                                                <Card.Body >
                                                    <Card.Title>{movie.title}</Card.Title>
                                                    <Card.Title>Directed by {movie.director}</Card.Title>
                                                    <br />
                                                    <Card.Subtitle>Released: {movie.year}</Card.Subtitle>
                                                    <Link to={`/released/${movie._id}`}>
                                                        <Button className="alignBottom" value={movie._id} variant="dark">View more...</Button>
                                                    </Link>
                                                </Card.Body>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Jumbotron>
            </Container>
        </div >
    )
}
export default CurrentMovies;