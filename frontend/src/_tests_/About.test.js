import React from 'react';
import About from '../Components/Information/About/About';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();

})