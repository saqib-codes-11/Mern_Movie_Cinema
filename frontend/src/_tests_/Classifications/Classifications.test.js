import Classifications from "../../Components/Information/Classifications";
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import React from 'react';

describe(`Classification testing`, () => {

    let testComponent;

    it.skip(`should render the page`, () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: () => ({
                classkey: '0'
            }),
        }));

        const realUseState = React.useState

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState(0))

        const TestInstance = create(
            <BrowserRouter>
                <Classifications />
            </BrowserRouter>
        )
        testComponent = TestInstance.root;

        const tree = create(<Classifications />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})