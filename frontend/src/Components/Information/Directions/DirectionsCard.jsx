import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const DirectionsCard = ({ cardData }) => {
    return (
        <Col lg={6} xs={12} md={6} className="p-2">

            <Card.Body className="bg-t">

                <Card.Title title='location title' className=" colorScheme c-w padd-1">{cardData.title}</Card.Title>
                <Card.Subtitle title='location address description' className="c-w min-h-70 padd-1">{cardData.description}</Card.Subtitle>
                <Card.Text className='padd-1 txt-area'>
                    <a title='directions map link' href={cardData.nav}>
                        <FontAwesomeIcon className='social-icon padd-1' icon={faMapMarkedAlt} size="4x" color="#ff3333" />
                    </a>
                    <p title='directions map label' className='txt-area'>{cardData.btn}</p>
                </Card.Text>
                {cardData.img ?
                    <img src={cardData.img}
                        height='300px'
                        width="100%"
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />

                    : cardData.map}
            </Card.Body>


        </Col >
    );
}


export default DirectionsCard;