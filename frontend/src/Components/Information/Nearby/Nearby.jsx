import '../../../CSS/Pages.css';
import NearbyVenue from './NearbyVenue';
import { useState } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import VenueCote from '../../../Images/venue_cote.jpg';
import SlugLettuce from '../../../Images/venue_sluglettuce.jpg';
import Emilia from '../../../Images/venue_emilia.jpg';

const Directions = () => {
    const [cardData, setCardData] = useState([{
        img: VenueCote,
        title: "Cote - St Katherine's Docks",
        description: "Modern, all-day French brasserie chain, serving regional specialities and traditional classics. Choose any cooked breakfast or light main, a fresh juice or a hot drink, and a glass of sparkling Baron de Marck Champagne. Available at all of our brasseries.",
        address: "International House, 1 St Katharine's Way, London E1W 1UN",
        telephone: "+442074883668",
        offers: [
            "Free lunch for children",
            "Dinner 2 for 1 as a couple",
            "Double for single price"
        ],
        nav: "https://www.google.co.uk/maps/place/Cote+-+St+Katherine's+Docks/@51.5082267,-0.0755847,17z/data=!4m5!3m4!1s0x48760348e2c50419:0x548a54f8679423f4!8m2!3d51.5082086!4d-0.0737684"
    },
    {
        img: Emilia,
        title: "Emilia's Crafted Pasta",
        description: "At Emilia’s we love-soul warming comfort food. Everything we do revolves around the essence of Italian cuisine – freshness and simplicity. We believe Italian pasta should be served in a casual way with the generosity and warm welcome of previous generations.",
        address: "C3, Ivory House St Katharine Docks, London E1W 1AT",
        telephone: "+442074812004",
        offers: [
            "Family deal for £20",
            "Dinner specials Friday's",
            "All you can eat Monday night's after 8pm"
        ],
        nav: "https://www.google.co.uk/maps/place/Emilia's+Crafted+Pasta+(St.+Katharine+Docks)/@51.507246,-0.071571,17z/data=!4m5!3m4!1s0x48760349cb62bf9f:0x1b713290cb21ac2c!8m2!3d51.507246!4d-0.071571"
    },
    {
        img: SlugLettuce,
        title: "Slug & Lettuce Tower Bridge",
        description: "Smart chain pub with a cocktail list, a classic British menu and uncluttered contemporary decor. Beautifully located on St Katharine Docks right by the waterside and to an impressive backdrop of the Tower of London, The Slug & Lettuce Tower Bridge is the exciting newest addition to The Slug & Lettuce family.",
        address: "1 St Katharine's Way, London E1W 1YL",
        telephone: "442077024210",
        offers: [
            "This venue does not have cinema related offers"
        ],
        nav: "https://www.google.co.uk/maps/place/Slug+%26+Lettuce+Tower+Bridge/@51.5083238,-0.0744718,17z/data=!4m12!1m6!3m5!1s0x48760348e2c50419:0x548a54f8679423f4!2sCote+-+St+Katherine's+Docks!8m2!3d51.5082086!4d-0.0737684!3m4!1s0x4876034974e166ef:0xd50885920e5ef4af!8m2!3d51.5084255!4d-0.0733634"
    }
    ]);

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 class='landing-text'>Nearby Venues</h1>
                    <Row>
                        {cardData.map((item, i) => (
                            <NearbyVenue key={i} cardData={item} />
                        ))};
                    </Row>
                </Jumbotron>
            </Container >
        </div>

    )
}
export default Directions;