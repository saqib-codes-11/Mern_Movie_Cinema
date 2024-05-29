import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'


const ForumComments = () => {

    const { movie } = useParams();
    const [commentList, setCommentList] = useState([]);
    const [movieList, setMovieList] = useState({});
    const [error, setError] = useState(null);
    const [validated, setValidated] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [loadedMovie, setLoadedMovie] = useState(false);
    const [show, setShow] = useState(false);

    const getComments = () => {
        axios.get(`http://localhost:5000/comment/${movie}`)
            .then((response) => {
                setLoaded(true);
                setCommentList(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    const getMovies = () => {
        axios.get(`http://localhost:5000/movie/${movie}`)
            .then((response) => {
                setMovieList(response.data);
                setLoadedMovie(true);
            })
            .catch((error) => {
                setLoadedMovie(true);
                setError(error);
            });
    }

    const [movieID, setMovieID] = useState(movie);
    const [author, setAuthor] = useState();
    const [rate, setRate] = useState("5");
    const [comment, setComment] = useState("");

    const verifier = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        } else {
            const profanity = new Array("crap", "stupid", "ugly", "dumb", "die", "dead")
            let profanityAlert = new Array;
            let profanityCount = 0;

            const resetProfanityCount = () => {
                profanityCount = 0;
            }

            resetProfanityCount();
            let compare_text = comment;
            for (let i = 0; i < profanity.length; i++) {
                for (let j = 0; j < (compare_text.length); j++) {
                    if (profanity[i] === compare_text.substring(j, (j + profanity[i].length)).toLowerCase()) {
                        profanityAlert[profanityCount] = compare_text.substring(j, (j + profanity[i].length));
                        profanityCount++;
                    }
                }
            }
            let alertMsg = "";
            for (let k = 1; k <= profanityCount; k++) {
                alertMsg += "\n" + "(" + k + ")  " + profanityAlert[k - 1];
            }

            if (profanityCount > 0) {
                alert("The message will not be sent because of inappropriate words:" + alertMsg);
            } else {
                e.preventDefault();
                let commentBody = {
                    movieID: movieID,
                    author: author,
                    rate: rate,
                    comment: comment,
                };

                axios.post('http://localhost:5000/comment', commentBody, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                    .then((response) => {
                        setAuthor("");
                        setRate("5");
                        setComment("");
                        getComments();
                        handleClose();
                    })
                    .catch((error) => {
                        setError(error)
                    })



            }
            window.onload = resetProfanityCount;
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    useEffect(() => {
        getComments();
        getMovies();
    }, []);

    if (!loaded || !loadedMovie) {
        return <p>Data is loading</p>
    }

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <Row>
                        <Col className="pt-2" lg={12}>
                            <Card className="bg-dark text-white" >
                                <Card.Img src={imageUpdater(movieList.imageURL)} height="500px" alt={`Poster for ${movieList.title}`} style={{ objectFit: "cover", opacity: 0.5, display: "block", }} />
                                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                    <div class="bgBlur">
                                        <Card.Title className="cardCommentMovieTitle">{movieList.title}</Card.Title>
                                        <Card.Text className="cardComementMovieText">{movieList.shortPlot}</Card.Text>
                                        <Card.Text className="cardComementMovieText">Directed by {movieList.director}</Card.Text>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="pb-1">
                            <Button variant="dark" style={{ flex: 1, backgroundColor: '#912323' }} size="lg" block onClick={handleShow}>Add a comment...</Button>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose} className="bgBlur commentModal">
                        <Modal.Header closeButton>
                            <Modal.Title>Add a comment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={verifier} noValidate validated={validated}>
                                <Form.Group as={Row} controlId="formHorizontalAuthor">
                                    <Form.Label column sm={2}>
                                        Name:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" name="author" placeholder="Your name..." required value={author} onChange={(event) => {
                                            return setAuthor(event.target.value)
                                        }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalRating">
                                    <Form.Label column sm={2}>
                                        Rating
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="range" name="rate" min="1" max="10" required value={rate} onChange={(event) => {
                                            return setRate(event.target.value)
                                        }} />
                                        <div>
                                            {rate}/10
                                        </div>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your comment: </Form.Label>
                                    <Form.Control as="textarea" rows={3} name="comment" maxLength={140} required value={comment} onChange={(event) => {
                                        return setComment(event.target.value)
                                    }} />
                                    <Form.Label>{140 - comment.length} Characters remaining.</Form.Label>
                                </Form.Group>
                                <Button variant="outline-light" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className="postComButton float-right" type="submit" variant="outline-light">
                                    Post comment!
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                    <Container>
                        <Row>
                            {commentList.map((comment) => (
                                <Col lg={12} className="py-1">
                                    <Card className=" text-white" style={{ backgroundColor: '#A02626' }}>
                                        <Card.Body>
                                            <Card.Title>{
                                                comment.comment
                                            }</Card.Title>
                                            <Card.Subtitle>User rating: {comment.rate}/10</Card.Subtitle>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#912323' }}>By {comment.author}</Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Jumbotron>
            </Container >
        </div>
    );
}

export default ForumComments;