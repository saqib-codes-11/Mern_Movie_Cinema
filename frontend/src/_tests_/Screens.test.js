import React from 'react';
import renderer from 'react-test-renderer';
import Screens from '../Components/Information/Screens';

test("It matches the snapshot", () => {
    const tree = renderer.create(<Screens />).toJSON();
    expect(tree).toMatchSnapshot();

})