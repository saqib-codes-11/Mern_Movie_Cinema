import CurrentMovies from '../../Components/Listings/CurrentMovies'
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import React from 'react';

describe(`Current movies landing page testing`, () => {

    let creator;
    let testComponent;

    let movieObjs = [{
        title: "Fast and Furious 9",
        year: 2021,
        runTime: "143 mins",
        genre: "Action, Adventure, Crime",
        shortPlot: "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
        imageURL: "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
        actors: [
            {
                name: "Vin Diesel",
                role: "Dominic Toretto",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ac1dr6oK2ImdcJInKjIZw9sG6Jk.jpg"
            },
            {
                name: "Michelle Rodriguez",
                role: "Letty Ortiz",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/soXPKCMmOxT7oyfGsMUHB6YHLcC.jpg"
            },
            {
                name: "Tyrese Gibson",
                role: "Roman Pearce",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jxoy4fbXNKFQtBdK73cLXEz3ufS.jpg"
            }
        ],
        director: "Justin Lin",
        dateTime: [
            {
                day: "Monday",
                timeOfMovie: [
                    {
                        time: "18:00"
                    },
                    {
                        time: "20:00"
                    },
                    {
                        time: "22:00"
                    }
                ]
            },
            {
                day: "Tuesday",
                timeOfMovie: [
                    {
                        time: "18:00"
                    },
                    {
                        time: "20:00"
                    },
                    {
                        time: "22:00"
                    }
                ]
            },
            {
                day: "Wednesday",
                timeOfMovie: [
                    {
                        time: "18:00"
                    },
                    {
                        time: "20:00"
                    },
                    {
                        time: "22:00"
                    }
                ]
            },
            {
                day: "Thursday",
                timeOfMovie: [
                    {
                        time: "18:00"
                    },
                    {
                        time: "20:00"
                    },
                    {
                        time: "22:00"
                    }
                ]
            },
            {
                day: "Friday",
                timeOfMovie: [
                    {
                        time: "18:00"
                    },
                    {
                        time: "20:00"
                    },
                    {
                        time: "22:00"
                    }
                ]
            }
        ],
        released: true,
        classification: "12A"
    }]

    beforeEach(() => {
        const TestInstance = create(<CurrentMovies />)
        testComponent = TestInstance.root;
    })

    it(`should render data is loading`, () => {
        const p = testComponent.findByType('p');
        expect(p.children[0]).toEqual('Data is loading');
    })

    it(`should render forum landing page`, async () => {
        const realUseState = React.useState

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState(movieObjs))
            .mockImplementationOnce(() => realUseState(null))
            .mockImplementationOnce(() => realUseState(true))
        creator = create(<BrowserRouter><CurrentMovies /></BrowserRouter >)
        testComponent = creator.root

        const h1 = testComponent.findByType('h1');
        expect(h1.children[0]).toEqual('Current Movies ');

        const h3 = testComponent.findByType('h3');
        expect(h3.children[0]).toEqual('Come to our cinema and watch these films right now!');

        const tree = creator.toJSON();
        expect(tree).toMatchSnapshot();
    })

})
