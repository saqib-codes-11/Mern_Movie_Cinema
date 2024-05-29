import DirectionsCard from "../Components/Information/Directions/DirectionsCard";
import { create } from 'react-test-renderer';
import CinemaOutside from '../Images/cinema_outside.jpeg';

describe(`DirectionsCard component testing with props`, () => {

    const directionsCardData = {
        title: "QA Cinema",
        description: "3rd Floor, International House, 1 St Katharine's Way, London E1W 1UN",
        nav: "https://www.google.co.uk/maps/place/QA+Ltd./@51.507524,-0.0737885,19.79z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m8!1m2!2m1!1scar+park!3m4!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!8m2!3d51.5075167!4d-0.0738037",
        img: CinemaOutside,
        btn: "Directions"
    };

    let testComponent;

    beforeEach(() => {
        const TestInstance = create(<DirectionsCard cardData={directionsCardData} />);
        testComponent = TestInstance.root;
    });

    it(`Should match the snapshot`, () => {
        const element = create(<DirectionsCard cardData={directionsCardData} />).toJSON();
        expect(element).toMatchSnapshot();
    })

});
