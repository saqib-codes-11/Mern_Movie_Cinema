import { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container, Jumbotron, Alert } from 'react-bootstrap';

import axios from 'axios';
import './BookingDetails.css';
import '../../CSS/Pages.css';
import Form from 'react-bootstrap/Form'

const BookingDetails = ({ getBookingProp }) => {

    const getBooking = getBookingProp;

    //set movies list
    const [movieList, setMovieList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const [show, setShow] = useState(false);

    //set selected movie & set days
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [days, setDays] = useState([]);

    //set selected day & set times
    const [selectedDay, setSelectedDay] = useState({});
    const [times, setTimes] = useState([]);

    //set selected time
    const [selectedTime, setSelectedTime] = useState({})

    //set tickets
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [senior, setSenior] = useState(0);

    //set name
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 4 || child + adult + senior < 1 || selectedDay?.day === null || selectedTime?.time === null
            || (selectedMovie !== null && (selectedMovie?.classification !== 'U' && selectedMovie?.classification !== '12A'
                && selectedMovie?.classification !== 'PG') && child > 0)
            || (child > 0 && adult + senior < 1 && selectedMovie?.classification !== 'U')) {
            setError(true);
        } else {
            getBooking({ name: name, child: child, adult: adult, senior: senior, selectedDay: selectedDay, selectedTime: selectedTime, selectedMovie: selectedMovie, paymentID: null });
        }
    }

    //get prices
    const [prices, setPrices] = useState({});

    const getPrices = () => {
        axios.get('http://localhost:5000/price')
            .then((response) => {
                setPrices(response.data[0]);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getPrices();
    }, []);

    //get movies
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

    //set movies
    useEffect(() => {
        getMovies();
    }, []);

    //set days
    useEffect(() => {
        setDays(selectedMovie?.dateTime);
    }, [selectedMovie]);

    //set times
    useEffect(() => {
        setTimes(selectedDay.timeOfMovie);
    }, [selectedDay]);

    return (
        <Jumbotron className="bgBlur">
            <Container className='colorScheme'>
                <h3>Booking Details</h3>
                <Form>
                    <Form.Group className="mb-3">
                        {/* render name */}
                        <Form.Label id='name-label'> Booking Name: </Form.Label>
                        <Form.Control type='text' id='name' class="form-control" placeholder="Jane Doe" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        {/* render movies list */}
                        <Form.Label> Movie of Choice: </Form.Label>
                        <select aria-label="movie-select" class="form-control"
                            onChange={e =>
                                movieList.map(movie => {
                                    movie._id === e.target.value &&
                                        setSelectedMovie(movie)
                                })
                            }>
                            <option selected disabled hidden> Select Movie </option>
                            {movieList.map(movie => (
                                <option value={movie._id}>{movie.title}</option>
                            ))}
                        </select >
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            {/* render days */}
                            <Form.Label > Day: </Form.Label>
                            <select aria-label="day-select" class="form-control"
                                onChange={e =>
                                    days.map(day => {
                                        day._id === e.target.value &&
                                            setSelectedDay(day)
                                    })
                                }
                            >
                                <option selected disabled hidden> Select Day </option>
                                {days?.map(day => (
                                    <option value={day._id}>{day.day}</option>
                                ))}
                            </select >
                        </Form.Group>
                        <Form.Group as={Col}>
                            {/* render times */}
                            <Form.Label > Time: </Form.Label>
                            <select aria-label="time-select" class="form-control"

                                onChange={e =>
                                    times.map(time => {
                                        time._id === e.target.value &&
                                            setSelectedTime(time)
                                    })
                                }
                            >
                                <option selected disabled hidden> Select Time </option>
                                {times?.map(time => (
                                    <option value={time._id}>{time.time}</option>
                                ))}
                            </select >
                        </Form.Group>
                    </Row>
                    {/* render no of tickets (adult, child, senior) */}

                    <h5> Tickets: </h5>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label> Child (£{prices?.child} Each) </Form.Label>

                            <select aria-label="ticket-select" id='child' class="form-control" value={child}
                                onChange={(event) => {
                                    setChild(parseInt(event.target.value));
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label> Adult (£{prices?.adult} Each) </Form.Label>
                            <select aria-label="ticket-select" id='adult' class="form-control" value={adult}
                                onChange={(event) => {
                                    setAdult(parseInt(event.target.value));
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label> Senior (£{prices?.senior} Each) </Form.Label>
                            <select aria-label="ticket-select" id='senior' class="form-control" value={senior}
                                onChange={(event) => {
                                    setSenior(parseInt(event.target.value));
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </Form.Group>
                    </Row>
                    {selectedMovie &&
                        <div class='col-sm'>
                            <Card class='container' id='movie-card'>
                                <Row>
                                    <div class='col-sm-12 col-lg-4'>
                                        <img src={selectedMovie?.imageURL} style={{ float: 'none' }} width='100%' justify-content='center' alt="movie poster" />
                                    </div>
                                    <div class='col-sm-12 col-lg-8' style={{ float: 'left', textAlign: 'left' }}>
                                        <h5 style={{ color: 'gray' }}>{selectedMovie?.title}</h5>
                                        <p style={{ color: 'gray' }}> Plot Synopsis: {selectedMovie?.shortPlot} </p>
                                        <p style={{ color: 'gray' }}> Genre(s): {selectedMovie?.genre}</p>
                                        <p style={{ color: 'gray' }}> Runtime: {selectedMovie?.runTime} </p>
                                        <p style={{ color: 'gray' }}> Age Rating: {selectedMovie?.classification} </p>
                                    </div>
                                </Row>
                            </Card>
                        </div>}
                </Form>
                <Alert variant='danger' show={error} onClose={() => { setError(false) }} dismissible='true' style={{ width: '70%', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Alert.Heading> It seems like something's not quite right... </Alert.Heading>
                    {() => setShow(false)}
                    <h6>
                        Please fix the following problems with your booking:
                    </h6>
                    {
                        (name.length < 4) &&
                        <li> Your name needs to be a minimum of 4 characters long. {() => setShow(true)} </li>
                    }
                    {
                        (adult + child + senior < 1) &&
                        <li> You need to book at least 1 ticket. {() => setShow(true)} </li>
                    }
                    {
                        (selectedMovie == null) &&
                        <li> You need to select a movie to watch. {() => setShow(true)}</li>
                    }
                    {
                        (selectedDay?.day == null) &&
                        <li> You need to select a day to watch your movie. {() => setShow(true)} </li>
                    }
                    {
                        (selectedTime?.time == null) &&
                        <li> You need to select a time to watch your movie. {() => setShow(true)}</li>
                    }
                    {(selectedMovie !== null && (selectedMovie?.classification !== 'U' && selectedMovie?.classification !== '12A'
                        && selectedMovie?.classification !== 'PG') && child > 0) ?
                        <li> Children are not permitted to watch this movie.  {() => setShow(true)} </li> :
                        ((child > 0 && adult + senior < 1 && selectedMovie?.classification !== 'U') ?
                            <li> Children need to be accompanied by an adult or senior for this movie. {() => setShow(true)}</li> : <></>)
                    }
                    {() => setError(show)}
                </Alert >
                <Button variant="outline-dark" type='submit' id='submit' className="mb-3 text-white"
                    onClick={handleSubmit}> To Payment </Button>
            </Container>
        </Jumbotron >


    )
}

export default BookingDetails;