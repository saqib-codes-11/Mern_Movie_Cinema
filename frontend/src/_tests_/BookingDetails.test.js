import BookingDetails from "../Components/TicketBooking/BookingDetails";
import { create } from 'react-test-renderer';
import React from 'react';

describe('Booking Tickets testing with props', () => {

    //Variables for props
    const bookingData = {
        name: 'test_name',
        child: 'test_child',
        adult: 'test_adult',
        senior: 'test_senior',
        selectedDay: ['test_selectedDay'],
        selectedTime: ['test_selectedTime'],
        selectedMovie: ['test_selectedMovie'],
        paymentID: 'test_paymentID'
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<BookingDetails{...bookingData} />)
        testComponent = TestInstance.root;
    })

    // it('Should render input labels correctly', () => {
    //     //Arrange + Act
    //     const formLabel = testComponent.find(" Booking Name ");
    //     //Assert
    //     expect(formLabel).toEqual(" Booking Name ");
    // })

    it('Should render alert when incorrect data entered', () => {
        const realUseState = React.useState;
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState([]))
            .mockImplementationOnce(() => realUseState(false))
            .mockImplementationOnce(() => realUseState(true))
            .mockImplementationOnce(() => realUseState(true));

        testComponent = create(<BookingDetails{...bookingData} />).root;
        //Arrange + Act
        const alert = testComponent.findAllByType('li')[0];
        //Assert
        expect(alert.children[0]).toBe(" Your name needs to be a minimum of 4 characters long. ");
    })
})