import React from 'react';
import Member from '../Components/Information/About/Member';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { create } from 'react-test-renderer';

// describe.skip('Booking Tickets testing with props', () => {

//Variables for props
const memberData = {
    name: "Kevin",
    role: "Product Owner",
    projectMain: "Frontend, Jira, Github, Routing",
    projectSecondary: "Styling, Documentation",
    github: "https://github.com/KevinD-QA",
    linkedin: "https://www.linkedin.com/in/kevin-kcdoan/",
    email: "Kdoan@qa.com",
    telephone: "+447542962985"

};

// //Create variable called testComponent
let testComponent;

//Before each test create new component
beforeEach(() => {
    const TestInstance = create(<Member member={memberData} />)
    testComponent = TestInstance.root;
})

test("It matches the snapshot", () => {
    const tree = renderer.create(<Member member={memberData} />).toJSON();
    expect(tree).toMatchSnapshot();

});

