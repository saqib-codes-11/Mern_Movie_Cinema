import ContactUs from "../Components/Information/ContactUs";
import { create } from "react-test-renderer";

describe(`Directions snapshot test`, () => {

    it(`Should match the snapshot`, () => {
        const element = create(<ContactUs />).toJSON();
        expect(element).toMatchSnapshot();
    })

})