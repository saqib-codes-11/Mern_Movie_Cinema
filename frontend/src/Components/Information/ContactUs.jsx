import { Modal, Button, Container, Form, Row, Col, Jumbotron } from 'react-bootstrap'
import { useState } from 'react';
import '../../CSS/Pages.css';
import emailjs from 'emailjs-com';
import config from "../../config.js"

const ContactUs = () => {

    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('feedback');
    const [message, setMessage] = useState('');
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false);
        setEmail('');
        setMessage('');
        setTopic('feedback');
    }

    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setValidated(true);
            e.preventDefault();
            emailjs.sendForm('qacinema', 'template_kn9ua19', e.target, config.emailJsId)
                .then(() => {
                    handleShow();
                }, (error) => {
                    alert(`Something went wrong. We couldn't sent your message! ${error}`)
                });
        }
    }



    return (
        <div class='background'>
            <Jumbotron className="bgBlur">
                <Container className="text-white">
                    <h1 class='landing-text'> Contact Us </h1>
                    <Container >
                        <Form onSubmit={handleSubmit} noValidate validated={validated} style={{ backgroundColor: '#A02626' }} className="rounded">

                            <Form.Group as={Row} className="mb-3 padd-1">
                                <Form.Label sm={12} md={2} className="text-right pr-4 mt-3"> Email address </Form.Label>
                                <Form.Control sm={12} md={10} required name="email" type='email' id='email' className="mt-3" placeholder="name@example.com" onChange={(event) => {
                                    setEmail(event.target.value);
                                }} value={email}></Form.Control>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 padd-1" >
                                <Form.Label sm={12} md={2} className="text-right">Message Topic</Form.Label>
                                <Col sm={10}>
                                    <Form.Control sm={12} md={10} required as="select" name='subject' id='subject'
                                        onChange={(event) => {
                                            setTopic(event.target.value);
                                        }} value={topic}>
                                        <option value='feedback'> Feedback </option>
                                        <option value='booking'> Venue Booking </option>
                                        <option value='message'> Other </option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 padd-1">
                                <Form.Label sm={12} md={2} className="text-right pr-4"> Your Message </Form.Label>
                                <Form.Control sm={12} md={10} required
                                    name="message" as="textarea" id='message' placeholder="Leave a comment here"
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                    }} value={message}></Form.Control>
                            </Form.Group>

                            <Button variant="outline-dark" id='submit' type='submit' size="lg"> Send </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title> Thanks for your E-mail!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>We appreciate your {topic} and will get back you as soon as we can. You can expect a reply from us sent to {email} within the next 5 working days.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Container>
                </Container >
            </Jumbotron>

            <div id="fixed">
            </div>
        </div >
    )
}
export default ContactUs;