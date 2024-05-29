import { useEffect } from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForumLandingPage.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../CSS/Pages.css';


const ForumCommentsMain = () => {

    const [movieList, setMovieList] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

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
                    <h1 class='landing-text'> Forum </h1>
                    <h3 class="lead">Discuss about your movie experiences here!</h3>
                    <Container>
                        <Row>
                            {movieList.map((movie) => (
                                <Col lg={4} className="py-3">
                                    <Card className="text-white cardHoverZoom" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                        <Card.Img src={imageUpdater(movie.imageURL)} height="200px" style={{ objectFit: "cover", opacity: 0.8 }} alt={`${movie.title} Poster`} />
                                        <Card.Body>
                                            <Card.Text>Click the button below to talk about {movie.title}!</Card.Text>
                                            <Link to={`/comments/${movie._id}`}>
                                                <Button variant="outline-dark" className="text-white" value={movie._id}>View Comments...</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default ForumCommentsMain;