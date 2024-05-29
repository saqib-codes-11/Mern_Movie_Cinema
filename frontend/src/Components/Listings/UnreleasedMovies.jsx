import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ReleasedMovie.css';
import Badge from 'react-bootstrap/Badge'

const UnreleasedMovie = () => {

    const { movie } = useParams();

    const [movieObj, setMovieObj] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getMovies = () => {
        axios.get(`http://localhost:5000/movie/${movie}`)
            .then((response) => {
                setMovieObj(response.data);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
    }

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    const classification = (classification) => {
        const classList = {
            "U": "success",
            "PG": "info",
            "12A": "primary",
            "12": "primary",
            "15": "warning",
            "18": "danger",
            "TBC": "secondary"
        }
        return classList[classification]
    }

    useEffect(() => {
        getMovies();
    }, []);

    if (!loaded) {
        return <p>Data is loading</p>
    }

    return (
        <div className="background">
            <div className="fullScreen">
                <Container fluid>
                    <div className="py-3">
                        <Card style={{ flex: 1, backgroundColor: '#212121' }} className="text-white">
                            <Row className="no-gutters">
                                <Col md={4}>
                                    <img src={imageUpdater(movieObj.imageURL)} alt="Movie image" width="100%" height="700px" style={{ objectFit: "cover" }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title className="cardMovieTitle">{movieObj.title}</Card.Title>
                                        <Badge className="classificationBadge mb-3" variant={classification(movieObj.classification)}>Rating: {movieObj.classification}</Badge>
                                        <Card.Text className="cardMovieText">Directed by {movieObj.director}</Card.Text>
                                        <Card.Text className="cardMovieText">Released in {movieObj.year}</Card.Text>
                                        <Card.Subtitle className="cardMovieText">{movieObj.shortPlot}</Card.Subtitle>
                                        <br />
                                        <div>
                                            <Card.Text className="cardMovieText">Cast</Card.Text>
                                            <Row>
                                                {movieObj.actors.map((details) => (
                                                    <Col lg={2} className="py-3">
                                                        <Card className=" text-white" style={{ flex: 1, backgroundColor: '#912323' }}>
                                                            <Card.Img class="cardImg" src={details.image} />
                                                            <Card.Body>
                                                                <Card.Subtitle>{details.name}</Card.Subtitle>
                                                                <Card.Text>{details.role}</Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div>
        </div >
    );
}

export default UnreleasedMovie;