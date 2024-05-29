import '../../../CSS/Pages.css';
import { useState } from 'react';
import CinemaOutside from '../../../Images/cinema_outside.jpeg';
import Map from './Map';
import ParkingOutside from '../../../Images/parking_outside.jpg';
import FromUnderground from '../../../Images/directions_from_underground.jpg';
import FromBus from '../../../Images/directions_from_bus.jpg';
import DirectionsCard from './DirectionsCard';
import { Row } from 'react-bootstrap';

import { Jumbotron, Container } from 'react-bootstrap';

const Directions = () => {
    const locationCoord = { lat: 51.50756760758714, lng: -0.07379247123104038 }
    const LocationMap = <Map coord={locationCoord} />;
    const [cardData, setCardData] = useState([{
        title: "QA Cinema",
        description: "3rd Floor, International House, 1 St Katharine's Way, London E1W 1UN",
        nav: "https://www.google.co.uk/maps/place/QA+Ltd./@51.507524,-0.0737885,19.79z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m8!1m2!2m1!1scar+park!3m4!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!8m2!3d51.5075167!4d-0.0738037",
        img: CinemaOutside,
        btn: "Directions"
    },
    {
        title: "Find us on Google Maps",
        description: "We are located just near Tower Bridge (north side)",
        nav: "https://www.google.co.uk/maps/place/QA+Ltd./@51.507524,-0.0737885,19.79z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m8!1m2!2m1!1scar+park!3m4!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!8m2!3d51.5075167!4d-0.0738037",
        map: LocationMap,
        btn: "Navigate"
    },
    {
        title: "Minories Car Park",
        description: "1 Shorter St, London E1 8LP",
        nav: "https://www.google.co.uk/maps/place/Minories+Car+Park/@51.5103371,-0.0730342,16z/data=!4m9!1m2!2m1!1scar+park!3m5!1s0x0:0x398064c92140ae17!8m2!3d51.5103364!4d-0.0730151!15sCghjYXIgcGFya1oKIghjYXIgcGFya5IBC3BhcmtpbmdfbG90mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJSYWs0eWNYaEJSUkFC",
        img: ParkingOutside,
        btn: "Navigate"
    },

    {
        title: "From closest undeground station",
        description: "Tower Hill Underground Station",
        nav: "https://www.google.co.uk/maps/dir/Tower+Hill+Underground+Station/3rd+Floor,+QA+Ltd.,+International+House,+1+St+Katharine's+Way,+London+E1W+1UN/@51.5088432,-0.0767431,17.42z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x4876034c01181b61:0xe9a9202d18723f58!2m2!1d-0.0766609!2d51.5101178!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e2",
        img: FromUnderground,
        btn: "Walk from undeground"
    },
    {
        title: "From closest bus station",
        description: "St Katharine Dock (Stop TS)",
        nav: "https://www.google.co.uk/maps/dir/St+Katharine+Dock+(Stop+TS),+London+E1W+1BF/QA+Ltd/@51.5082367,-0.0737202,18.35z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x48760349ea7a73a9:0x7ced1ed64f02620!2m2!1d-0.0717084!2d51.5084763!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e2!5m1!1e2",
        img: FromBus,
        btn: "Walk from bus station"
    }
    ]);
    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 class='landing-text'>Directions</h1>
                    <Row>
                        {cardData.map((item, i) => (
                            <DirectionsCard key={i} cardData={item} />
                        ))};
                    </Row>
                </Jumbotron>
            </Container>

        </div >

    )
}
export default Directions;