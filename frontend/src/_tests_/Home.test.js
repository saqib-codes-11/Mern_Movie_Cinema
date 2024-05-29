import React from 'react';
import Home from '../Components/Home/Home';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();

})