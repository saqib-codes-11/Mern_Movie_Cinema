import Nearby from "../Components/Information/Nearby/Nearby";
import { create } from "react-test-renderer";

describe(`Nearby snapshot test`, () => {

    it(`Should match the snapshot`, () => {
        const element = create(<Nearby />).toJSON();
        expect(element).toMatchSnapshot();
    })

})