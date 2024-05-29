import { useEffect, useState } from "react";
import PayPal from "./PayPal";
import { Card } from "react-bootstrap";
import axios from 'axios';

import './BookingDetails.css';
import '../../CSS/Pages.css';

const Payment = ({ bookingProp, getPaymentProp }) => {

    const { name, child, adult, senior, selectedDay, selectedTime, selectedMovie } = bookingProp;
    const getPayment = getPaymentProp;

    const [prices, setPrices] = useState({});
    const [loaded, setLoaded] = useState(true);
    const [error, setError] = useState(null);

    const ticketNo = parseInt(child) + parseInt(adult) + parseInt(senior);

    const [total, setTotal] = useState(null);
    //const total = (prices?.child * child) + (prices?.adult * adult) + (prices?.senior * senior);

    const [paid, setPaid] = useState(false);

    const round = (price) => Number(price).toFixed(2);

    const getPrices = () => {
        axios.get('http://localhost:5000/price')
            .then((response) => {
                setPrices(response.data[0]);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getPrices();
    });

    useEffect(() => {
        setTotal((prices?.child * child) + (prices?.adult * adult) + (prices?.senior * senior));
    }, [prices])

    return (
        paid ?
            <div class='colorScheme' style={{ padding: '10px' }}>
                <h1 class='landing-text'> Payment Successful! </h1>
                <h3 class='landing-text'> Thank you for choosing QA Cinema! </h3>
                <h3 class='landing-text'> Please enjoy your film! </h3>
            </div> :
            <div class='colorScheme'>
                <h2 class='landing-text'>Order Confirmation</h2>
                <div class='confirm'>
                    <Card>
                        <h3> {ticketNo} {(ticketNo === 1) ? 'Ticket' : 'Tickets'} to see {selectedMovie.title} </h3>
                        <h3>on {selectedDay.day} at {selectedTime.time}</h3>
                        <h5> Booker: {name} </h5>
                        <h5> Tickets: </h5>
                        <h5> {child} child {(child === 1) ? 'ticket' : 'tickets'} - £{round(prices.child * child)} </h5>
                        <h5> {adult} adult {(adult === 1) ? 'ticket' : 'tickets'} - £{round(prices.adult * adult)} </h5>
                        <h5> {senior} senior {(senior === 1) ? 'ticket' : 'tickets'} - £{round(prices.senior * senior)} </h5>
                        <h5> Total - £{round(total)} </h5>
                    </Card>
                </div>
                {total &&
                    <PayPal totalProp={round(total)} setPaidProp={setPaid} setPaymentProp={getPayment} />}
            </div>
    )
}

export default Payment;