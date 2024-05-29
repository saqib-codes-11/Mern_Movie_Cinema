import '../../CSS/Pages.css';
import { Card, Accordion, Button, Container, Jumbotron } from "react-bootstrap"

const Screens = () => {
    return (
        <div>
            <div class='background'>
                <Container>
                    <Jumbotron className="bgBlur">
                        <h1 class='landing-text'> Screens </h1>
                        <Card style={{ flex: 1, backgroundColor: '#A02626' }}>
                            <div class='row'>
                                <div class='col-sm'>
                                    <img src="./Images/StandardDecor.png" alt='Our Standard Cinema Screen Decor' width='100%' />
                                </div>
                                <div class='col-sm'>
                                    <h4> Standard Seating </h4>
                                    <p> Our Standard movie screens offer comfortable and spacious seating with enough room to accomodate over 100 guests. You can view our floorplan seating below to pick out your best </p>
                                </div>
                            </div>
                            <div class='container'>
                                <Accordion>
                                    <Card style={{ flex: 1, backgroundColor: '#912323' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="text" eventKey="0" variant="outline-dark" className="text-white">
                                                View Seating Plan
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <img src="./Images/StandardPlan.png" alt='Standard Seating Plan' width='100%' />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <p />
                        </Card>
                        <p />
                        <Card style={{ flex: 1, backgroundColor: '#A02626' }}>
                            <div class='row'>
                                <div class='col-sm'>
                                    <h4> Deluxe Seating </h4>
                                    <p> Our world-renown IMAX Screens are perfect for any film lover who wants to sit back enjoy in comfort. With leather reclinable chairs, our mission is to give you the comfort you deserve allowing you to focus solely on the movie. Find our seating plan attached below. </p>
                                </div>
                                <div class='col-sm'>
                                    <img src="./Images/DeluxeDecor.png" alt='Our Deluxe Cinema Screen Decor' width='100%' />
                                </div>
                            </div>
                            <div class='container'>
                                <Accordion>
                                    <Card style={{ flex: 1, backgroundColor: '#912323' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="text" eventKey="0" variant="outline-dark" className="text-white">
                                                View Seating Plan
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <img src="./Images/DeluxePlan.png" alt='Deluxe Seating Plan' width='100%' />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <p />
                        </Card>
                    </Jumbotron>
                </Container>

            </div>
        </div>
    )
}

export default Screens;
