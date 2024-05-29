import '../../../CSS/Pages.css';
import './About.css';
import AboutUs from '../../../Images/About Us.png';
import { useState } from 'react';
import Member from './Member';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const About = () => {
    const [team, setTeam] = useState([
        {
            name: "Kevin",
            role: "Product Owner",
            projectMain: "Frontend, Jira, Github, Routing",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/KevinD-QA",
            linkedin: "https://www.linkedin.com/in/kevin-kcdoan/",
            email: "Kdoan@qa.com",
            telephone: "+447542962985"

        },
        {
            name: "Asshwin",
            role: "Scrum Master",
            projectMain: "Backend, Databases, Frontend, Testing",
            projectSecondary: "Scrums, Styling, Documentation",
            github: "https://github.com/ashkl",
            linkedin: "https://www.linkedin.com/in/asshwin-mugundharajah-71218a104/",
            email: "AMugundharajah@qa.com",
            telephone: "+447450073483"

        },
        {
            name: "Matthew Holmes",
            role: "Software Developer",
            projectMain: "Frontend, Testing",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/matayoh14",
            linkedin: "https://www.linkedin.com/in/matthew-holmes-69958a1b1/",
            email: "MHolmes1@academytrainee.com",
            telephone: "+447770339873"

        },
        {
            name: "Alin",
            role: "Software Developer",
            projectMain: "Backend, Databases, Cloud, Testing",
            projectSecondary: "Frontend, API, Styling, Documentation",
            github: "https://github.com/thealinivan",
            linkedin: "https://linkedin.com/in/thealinivan",
            email: "aivan@qa.com",
            telephone: "+447481925997"

        }
    ]);
    return (
        <div className="background">
            <div className="bgBlur">
                <Container className="pt-5">
                    <img
                        src={AboutUs}
                        width="300px"
                        alt="about Us img"
                    />
                    <Container className="padding">
                        <Container>
                            <Row>
                                <Col className="spec col-sm-6" sm={12} lg={6} md={6}>
                                    <h2 className="display-4 padd-1">About us</h2>
                                    <p className="lead justify marg-1">
                                        QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                                </Col>
                                <Col className="spec col-sm-6" sm={12} lg={6} md={6}>
                                    <h2 className="display-4 padd-1">About Team AKAM</h2>
                                    <p className="lead justify marg-1">
                                        Team AKAM is the best of the bunch, no words are needed to describe the sheer presence and intelligence of these individuals. Comparisons can be drawn but no one especially group 1 can even come close to matching our brilliance. Stand there in awe and embrace the almighty before you, or be banished to the shadow realm, <b>Scott Stevens and Amandeep Bassi</b>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <Container className='txt-area padd-3 c-w'>
                            <h2 className="padd-3">Team</h2>
                            <Row>
                                {team.map(member => (
                                    <Member member={member} />
                                ))}
                            </Row>
                            <Col className="spec col-sm-12 text-center padd-3">
                                <Card style={{ flex: 1, backgroundColor: '#912323' }}>
                                    <Card.Body>
                                        <h2 className="display-4 padd-1">Scrum description</h2>
                                        <p className="lead justify">
                                            <a href="https://www.scrum.org/" style={{ color: 'black' }}>Scrum</a> is an agile methodology used to help teams conceptulize, design and deliver a product. A scrum team will include the following roles:
                                            <ul>
                                                <li>Product Owner - representing the client and thier intrests.</li>
                                                <li>Scrum Master - accountable for the team to deliver the goal.</li>
                                                <li>Developers - carry out the work required to complete the backlog</li>
                                            </ul>
                                            We used scrum by following the basic scrum principles. Create a backlog of user stories and features. Plan a sprint with a realistic amount of goals
                                            that can be done in the time set of the sprint. If any tasks were not complete, it was moved to the next sprint. At the start of every day we would have
                                            our daily scrum to note our progress and what we can work on. We also had a sprint review and retrospective at the end of each sprint. This is where we talked
                                            about what we accomplished during the sprint. We also discussed on any issues that could impede our future sprints and how we could minimise the risk of the
                                            issue taking place.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>
                    </Container>
                </Container>
            </div >
        </div >
    )
}
export default About;