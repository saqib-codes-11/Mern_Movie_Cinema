import React from 'react';
import OpeningTimes from '../Components/Information/OpeningTimes';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<OpeningTimes />).toJSON();
    expect(tree).toMatchSnapshot();

})