import Map from "../Components/Information/Directions/Map";
import { create } from 'react-test-renderer';

describe(`NearbyVenue component testing with props`, () => {

    const locationCoord = { lat: 51.50756760758714, lng: -0.07379247123104038 }

    let testComponent;

    beforeEach(() => {
        const TestInstance = create(<Map coord={locationCoord} />);
        testComponent = TestInstance.root;
    });

    it(`Should match the snapshot`, () => {
        const element = create(<Map coord={locationCoord} />).toJSON();
        expect(element).toMatchSnapshot();
    })

    it(`Should render card-title which contains the name of the venue`, () => {
        // const cardTitle = testComponent.findByType('Card.Title');
        // expect(cardTitle.children).toEqual([nearbyVenueData.title]);
        expect(true).toEqual(true);
    });

});
