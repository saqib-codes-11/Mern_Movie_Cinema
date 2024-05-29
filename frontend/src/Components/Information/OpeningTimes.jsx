import '../../CSS/Pages.css';
import { Container, Table, Jumbotron } from 'react-bootstrap';
const OpeningTimes = () => {
    return (
        <div class="background">
            <div class="fullScreen">
                <h1 class='landing-text'>Opening Times</h1>
                <Container >
                    <Jumbotron className="bgBlur">
                        <Table className="table-hover text-white " id="tableBorder" style={{ flex: 1, backgroundColor: '#A02626' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Day of the Week</th>
                                    <th scope="col">Opening</th>
                                    <th scope="col"></th>
                                    <th scope="col">Closing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Monday</th>
                                    <td>13:00</td>
                                    <td> - </td>
                                    <td>22:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tuesday</th>
                                    <td>13:00</td>
                                    <td> - </td>
                                    <td>22:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td>13:00</td>
                                    <td> - </td>
                                    <td>22:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td>13:00</td>
                                    <td> - </td>
                                    <td>22:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td>13:00</td>
                                    <td> - </td>
                                    <td>23:30</td>
                                </tr>
                                <tr>
                                    <th scope="row">Saturday</th>
                                    <td>9:30</td>
                                    <td> - </td>
                                    <td>23:30</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sunday</th>
                                    <td>9:30</td>
                                    <td> - </td>
                                    <td>23:30</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Jumbotron>
                </Container>
            </div>
        </div>
    )
}
export default OpeningTimes;