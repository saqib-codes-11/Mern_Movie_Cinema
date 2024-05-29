import { Col, Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../../../CSS/Pages.css';

const NearbyVenue = ({ cardData }) => {

    return (

        <Col lg={6} xs={12} md={6} className="p-2">
            <div className="content">

                <Card.Body className="bg-t">
                    <img src={cardData.img}
                        width="100%"
                        height='300px'
                        alt={cardData.title}
                        style={{ objectFit: 'cover' }} />
                    <Card.Title title='venue title' className=" colorScheme c-w padd-3">{cardData.title}</Card.Title>
                    <br />
                    <Card.Subtitle title='venue description' className="c-w justify txt-area padd-1" style={{ lineHeight: '1.6' }}>{cardData.description}</Card.Subtitle>
                    <Card.Text title='QA Cinema related offers' className='c-r txt-area' label='QA Cinema Offers' >QA Cinema offers:</Card.Text>
                    <div class='padd-1'>
                        {
                            cardData.offers.map((offer, o) => (
                                <Card.Text key={o} title='single cinema offer item' class='landing-text txt-area marg-1 c-w'>{offer}</Card.Text>
                            ))
                        }
                    </div>
                    <Card.Text title='venue address' class='landing-text txt-area c-w padd-3' style={{ borderTop: '1px solid white' }}>{cardData.address}</Card.Text>
                    <Row>
                        <Col lg={6} xs={12} md={6}>
                            <Card.Text className='padd-1 txt-area'>
                                <a title='venue telephone link' href={`tel:${cardData.telephone}`}>
                                    <FontAwesomeIcon className='social-icon padd-1' icon={faPhone} size="4x" color="#ff3333" />
                                </a>
                                <p title='venue telephone label' className='txt-area'>Telephone</p>
                            </Card.Text>
                        </Col>
                        <Col lg={6} xs={12} md={6}>
                            <Card.Text className='padd-1 txt-area'>
                                <a title='venue telephone link' href={cardData.nav}>
                                    <FontAwesomeIcon className='social-icon padd-1' icon={faMapMarkedAlt} size="4x" color="#ff3333" />
                                </a>
                                <p title='venue telephone label' className='txt-area'>Directions</p>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>

            </div>

        </Col >
    )
}
export default NearbyVenue;