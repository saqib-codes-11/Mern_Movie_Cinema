
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import InTheHeights from '../../Images/In-The-Heights.jpg';
import BlackWidow from '../../Images/Black-Widow.jpg';
import F9 from '../../Images/Fast9.jpg';
import DemonSlayer from '../../Images/Demon Slayer.jpg';
import IMAX from '../../Images/Imax.png';
import IMAXScreen from '../../Images/Imax screen.jpg';
import '../../CSS/Pages.css';
import './Home.css';
const Home = () => {
    return (
        <div class="background">
            <div class="bgBlur">
                <div class="overlay">
                    <h1 class='landing-text'> Welcome to QA Cinemas</h1>
                    <h3 class="landing-text">Experience all the latest movies in stunning IMAX!</h3>
                </div>
                <Carousel className="d-flex align-items-center justify-content-center">
                    <Carousel.Item interval={4000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={InTheHeights}
                            alt="In the heights img"
                            href="/Forum"
                            height="900"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={BlackWidow}
                            alt="Black Widow img"
                            height="900"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={DemonSlayer}
                            alt="Demon Slayer img"
                            height="900"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={F9}
                            alt="Fast and Furious img"
                            height="900"
                        />
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <Container>
                        <Row className="mt-5">
                            <Col md={6}>
                                <h2 class="display-4">Unrivaled Quality</h2>
                                <p class="lead">
                                    Immerse yourself completely in the big screen experience with QA Cinemas IMAX. Every aspect of our IMAX Screens is designed to pull you into the film. Indulge in the journey that tickles your senses and brings them back to life. Transporting yourself into a new reality with our super-sized screens pulling you into the film, ear-tingling audio environment to ensure you can even hear a pin drop and where within the film as well as breath-taking imagery, watching movies on your computer will never be the same again.
                                </p>
                            </Col>
                            <Col md={6} className="mt-5">
                                <img src={IMAXScreen} alt="Imax Screen img" class="imgContainer" />
                            </Col>
                            <Col md={12}>
                                <div>
                                    <img src={IMAX} alt="Imax Logo" class="imgContainer" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </div>


    )
}
export default Home;