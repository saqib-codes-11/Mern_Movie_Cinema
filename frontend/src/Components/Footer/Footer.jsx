import './Footer.css';
import '../../CSS/Pages.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div class='Footer padd-1'>
            <Container>
                <Row>
                    <Col>
                        <a href='/About'>
                            <p1> About Us </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/Directions'>
                            <p1> Navigation </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/Nearby'>
                            <p1> Nearby Venues </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/ContactUs'>
                            <p1> Contact Us </p1>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.youtube.com/c/qa-cinema"
                            className="youtube social ">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faYoutube} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.facebook.com/qa-cinema/" className="facebook social ">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faFacebook} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.twitter.com/qa-cinema padd-1" className="twitter social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faTwitter} size="5x" color="#ff3333" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.instagram.com/qa-cinema padd-3" className="instagram social padd-1">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faInstagram} size="5x" color="#ff3333" />
                        </a>
                    </Col>
                </Row>
                <Col>
                    <p2> QA Cinema 2021 &copy; </p2>
                </Col>
            </Container>
        </div>
    )
}
export default Footer;