import Payment from "../Components/TicketBooking/Payment";
import { create } from 'react-test-renderer';
import React from 'react';

describe('Payment testing with props', () => {

    //Variables for props
    const paymentData = {
        name: 'John',
        child: 1,
        adult: 2,
        senior: 0,
        selectedDay: { day: 'test_selectedDay' },
        selectedTime: { time: 'test_selectedTime' },
        selectedMovie: { title: 'test_selectedMovie' },
    };

    const paymentType = {
        getPayment: 'test_payment'
    };

    //Create variable called testComponent
    let testComponent;

    //Before each test create new component
    beforeEach(() => {
        const TestInstance = create(<Payment bookingProp={paymentData} getPaymentProp={paymentType} />)
        testComponent = TestInstance.root;
    });
    it('Should render the first h3 with the correct details.', () => {
        //Arrange + Act
        //Create h3 variable, it is euqal to the first h3 in component
        const h3 = testComponent.findAllByType('h3')[0];
        //Assert
        //Expecting to receive a string to equal Ticket no.
        expect(h3.children[1]).toEqual((paymentData.child + paymentData.adult + paymentData.senior).toString());
        expect(h3.children[5]).toEqual(paymentData.selectedMovie.title);
    });
    it('Should render the second h3 with the correct details', () => {
        //Arrange + Act
        const h3 = testComponent.findAllByType('h3')[1];
        //Assert
        expect(h3.children[1]).toEqual(paymentData.selectedDay.day);
        expect(h3.children[3]).toEqual(paymentData.selectedTime.time);
    });
    it("Should render the first h5 with the booker's name", () => {
        //Arrange + Act
        const h5 = testComponent.findAllByType('h5')[0];
        //Assert
        expect(h5.children[1]).toEqual(paymentData.name);
    })
    it("Should render the final h5 with the correct total", async () => {
        //Arrange + Act
        const realUseState = React.useState;

        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState({
                adult: 5,
                child: 3,
                senior: 4
            }))
            .mockImplementationOnce(() => realUseState(true))
            .mockImplementationOnce(() => realUseState(null))
            .mockImplementationOnce(() => realUseState(13));

        testComponent = create(<Payment bookingProp={paymentData} getPaymentProp={paymentType} />).root;

        const h5 = testComponent.findAllByType('h5')[5];

        expect(h5.children[1]).toEqual('13.00');
    })

})