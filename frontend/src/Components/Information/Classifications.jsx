import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import './Classifications.css'
import { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useParams } from 'react-router-dom';
import '../../CSS/Pages.css';


const Classifications = () => {

    const { classkey } = useParams();
    const [key, setKey] = useState("0");

    const setter = () => {
        setKey(classkey);
    }

    useEffect(() => {
        setter();
    }, []);

    return (
        <div className="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 className="landing-text">Film Classifications</h1>
                    <h3 className="lead">Film Classifications are used to make sure that the movie you are watching
                        is suitable for you and your family. Scroll down to learn more about the classification system!</h3>
                    <Row>
                        <Col lg={6} xs={6}>
                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                                <Tab eventKey="0">
                                    <h4>Dangerous behaviour</h4>

                                    <p>Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.</p>

                                    <h4>Discrimination</h4>

                                    <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.</p>

                                    <h4>Drugs</h4>

                                    <p>References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.</p>

                                    <h4>Language</h4>

                                    <p>Infrequent use only of very mild bad language.</p>

                                    <h4>Threat and horror</h4>

                                    <p>Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.</p>

                                    <h4>Violence</h4>

                                    <p>Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).</p>
                                </Tab>
                                <Tab eventKey="1">
                                    <h4>Dangerous behaviour</h4>

                                    <p>No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour is presented as safe or fun.
                                        No glamorisation of realistic or easily accessible weapons such as knives. No focus on anti-social behaviour which young children are likely to copy.</p>

                                    <h4>Discrimination</h4>

                                    <p>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in an educational or historical context, or in a particularly dated work with no likely appeal to children.</p>

                                    <h4>Language</h4>

                                    <p>Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.</p>

                                    <h4>Sex</h4>

                                    <p>Sexual activity may be implied, but should be discreet and infrequent. Mild sex references and innuendo only.</p>

                                    <h4>Threat and horror</h4>

                                    <p>Frightening sequences or situations where characters are in danger should not be prolonged or intense. Fantasy settings and comedy may be mitigating factors.</p>

                                    <h4>Violence</h4>

                                    <p>Violence will usually be mild. However there may be moderate violence, without detail, if justified by its context (for example, history, comedy or fantasy).</p>
                                </Tab>
                                <Tab eventKey="2">
                                    <h4>Dangerous behaviour</h4>

                                    <p>No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives.</p>

                                    <h4>Discrimination</h4>

                                    <p>Discriminatory language or behaviour must not be endorsed by the work as a whole.</p>

                                    <h4>Drugs</h4>

                                    <p>Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>

                                    <h4>Language</h4>

                                    <p>There may be moderate bad language.
                                        Strong language may be permitted, depending on the manner in which it is used.</p>

                                    <h4>Sex</h4>

                                    <p>Sexual activity may be briefly and discreetly portrayed.
                                        Moderate sex references are permitted.</p>

                                    <h4>Threat and horror</h4>

                                    <p>There may be moderate physical and psychological threat and horror sequences.
                                        Horror sequences should not be frequent or sustained.</p>

                                    <h4>Violence</h4>

                                    <p>There may be moderate violence but it should not dwell on detail.
                                        There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.</p>
                                </Tab>
                                <Tab eventKey="3">
                                    <h4>Dangerous behaviour</h4>

                                    <p>Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied.</p>

                                    <h4>Discrimination</h4>

                                    <p>The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.</p>

                                    <h4>Drugs</h4>

                                    <p>Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction).</p>

                                    <h4>Language</h4>

                                    <p>There may be strong language.</p>

                                    <h4>Nudity</h4>

                                    <p>There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.</p>

                                    <h4>Sex</h4>

                                    <p>Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references to sexual behaviour.
                                    </p>

                                    <h4>Threat and horror</h4>

                                    <p>There may be strong threat and horror.</p>

                                    <h4>Violence</h4>

                                    <p>Violence may be strong but should not dwell on the infliction of pain or injury.</p>
                                </Tab>
                                <Tab eventKey="4">
                                    <p>Will always have mature themes. May contain (very) strong language, very strong violence (including strong sexual violence), explicit sex references (including sexual activity and real sex), nudity and hard drugs. (Sex works cannot be placed at "18".)</p>
                                </Tab>
                                <Tab eventKey="5">
                                    <p>To be supplied only in licensed sex shops to persons of not less than 18 years.</p>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col lg={6} xs={6}>
                            <Accordion activeKey={key} onSelect={(k) => setKey(k)}>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/BBFC_U_2019.svg" alt="U" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Title>Universal</Card.Title>
                                            <Card.Text>Suitable for all.</Card.Text>
                                            <Card.Text></Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/BBFC_PG_2019.svg" alt="PG" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Card.Title>Parental Guidance</Card.Title>
                                            <Card.Text>General viewing, however some scenes may unsettle younger children.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BBFC_12A_2019.svg" alt="12A" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Card.Title>12A</Card.Title>
                                            <Card.Text>Suitable for 12 years and over. Under 12 years may be admitted if accompanined by an adult.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/BBFC_15_2019.svg" alt="15" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Card.Title>15</Card.Title>
                                            <Card.Text>Suitable only for 15 years and over.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/BBFC_18_2019.svg" alt="18" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Card.Title>18</Card.Title>
                                            <Card.Text>Suitable only for 18 years and over.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card text="light" style={{ flex: 1, backgroundColor: '#A02626' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/BBFC_R18_2019.svg" alt="R18" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <Card.Title>R18</Card.Title>
                                            <Card.Text>QA Cinmea does not show any films that are rated with R18.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col>
                            <h2>More information...</h2>
                            <div className="link">
                                <p className="lead">If you would like to read up more about the classifications and the guidelines, check out these resources below:</p>
                                <ul>
                                    <li>
                                        <a href="https://www.bbfc.co.uk/about-classification/classification-guidelines">British Board of Film Classification (BBFC) - Classification Guidelines</a>
                                    </li>
                                    <li>
                                        <a href="http://www.screenonline.org.uk/film/id/592611/index.html">Screenonline - List of Classifications</a>
                                    </li>
                                    <li>
                                        <a href="https://en.wikipedia.org/wiki/British_Board_of_Film_Classification">BBFC Wikipedia</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default Classifications;