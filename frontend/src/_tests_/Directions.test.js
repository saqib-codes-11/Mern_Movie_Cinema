import Directions from "../Components/Information/Directions/Directions";
import { create } from "react-test-renderer";

describe(`Directions snapshot test`, () => {

    it(`Should match the snapshot`, () => {
        const element = create(<Directions />).toJSON();
        expect(element).toMatchSnapshot();
    })

})