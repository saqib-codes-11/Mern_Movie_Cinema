import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

describe(`testing the navigation`, () => {

    let movieArr = [
        {
            "_id": "60e429f57a5d6042284b2faf",
            "title": "The Black Phone",
            "released": false
        },
        {
            "_id": "60e41e337a5d6042284b2f4c",
            "title": "Black Widow",
            "released": true
        }
    ];
    let creator;
    let testComponent;

    // test("It matches the snapshot", () => {
    //     const tree = renderer.create(<Nav />).toJSON();
    //     expect(tree).toMatchSnapshot();

    // })

    it(`tests the search function`, () => {
        const realUseState = React.useState

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState(false))
            .mockImplementationOnce(() => realUseState("black"))
            .mockImplementationOnce(() => realUseState(movieArr))

        const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();


    })

})

