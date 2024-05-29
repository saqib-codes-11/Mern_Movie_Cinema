import React from 'react';
import Footer from '../Components/Footer/Footer';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();

})