const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Price } = require('../Models/Booking');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../index')

describe(`Booking routes`, () => {

    //test data
    let bookingID;
    let bookingName = "Albert E";

    let testBooking = {
        name: "Albert E",
        movieID: "60e41cf77a5d6042284b2f33",
        day: "Tuesday",
        time: "20:00",
        noOfTickets: {
            noOfAdult: 1,
            noOfChild: 0,
            noOfConcession: 0
        },
        paymentID: "paid"
    };

    const updateBooking = {
        name: "Albert Einstein",
        movieID: "60e41cf77a5d6042284b2f33",
        day: "Monday",
        time: "18:00",
        noOfTickets: {
            noOfAdult: 1,
            noOfChild: 1,
            noOfConcession: 1
        },
        paymentID: "paid"
    }

    //create
    it(`Should return posted booking when /booking is posted`, (done) => {
        //mock request
        chai.request(app)
            .post("/booking")
            .send(testBooking)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                bookingID = res.body._id;
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(testBooking));
                expect(res.body.name).to.equal(testBooking.name);
                expect(res.body.movieID._id).to.equal(testBooking.movieID._id);
                expect(res.body.day).to.equal(testBooking.day);
                expect(res.body.time).to.equal(testBooking.time);
                expect(res.body.noOfTickets.adult).to.equal(testBooking.noOfTickets.adult);
                expect(res.body.noOfTickets.child).to.equal(testBooking.noOfTickets.child);
                expect(res.body.noOfTickets.senior).to.equal(testBooking.noOfTickets.senior);
                expect(res.body.paymentID).to.equal(testBooking.paymentID);
                done();
            });

    });

    //read
    it(`Should return bookings when /booking is accessed`, (done) => {
        //mock request
        chai.request(app)
            .get("/booking")
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                res.body.map(item => {
                    expect(item).to.be.a("Object");
                    expect(item).to.contain.keys(Object.keys(testBooking));
                    expect(item.name).to.equal(testBooking.name);
                    expect(item.day).to.equal(testBooking.day);
                    expect(item.time).to.equal(testBooking.time);
                    expect(item.noOfTickets.adult).to.equal(testBooking.noOfTickets.adult);
                    expect(item.noOfTickets.child).to.equal(testBooking.noOfTickets.child);
                    expect(item.noOfTickets.senior).to.equal(testBooking.noOfTickets.senior);
                    expect(item.paymentID).to.equal(testBooking.paymentID);
                });
                done();
            });
    });

    //read by name
    it(`Should return bookings when /booking is accessed`, (done) => {
        //mock request
        chai.request(app)
            .get(`/booking/name/${bookingName}`)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                res.body.map(item => {
                    expect(item).to.be.a("Object");
                    expect(item).to.contain.keys(Object.keys(testBooking));
                    expect(item.name).to.equal(testBooking.name);
                    expect(item.day).to.equal(testBooking.day);
                    expect(item.time).to.equal(testBooking.time);
                    expect(item.noOfTickets.adult).to.equal(testBooking.noOfTickets.adult);
                    expect(item.noOfTickets.child).to.equal(testBooking.noOfTickets.child);
                    expect(item.noOfTickets.senior).to.equal(testBooking.noOfTickets.senior);
                    expect(item.paymentID).to.equal(testBooking.paymentID);
                });
                done();
            });
    });

    //update
    it(`Should return updated booking when /booking/id is updated`, (done) => {
        //mock request
        chai.request(app)
            .put(`/booking/${bookingID}`)
            .send(updateBooking)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(updateBooking));
                expect(res.body.name).to.equal(updateBooking.name);
                expect(res.body.movieID._id).to.equal(updateBooking.movieID._id);
                expect(res.body.day).to.equal(updateBooking.day);
                expect(res.body.time).to.equal(updateBooking.time);
                expect(res.body.noOfTickets.adult).to.equal(updateBooking.noOfTickets.adult);
                expect(res.body.noOfTickets.child).to.equal(updateBooking.noOfTickets.child);
                expect(res.body.noOfTickets.senior).to.equal(updateBooking.noOfTickets.senior);
                expect(res.body.paymentID).to.equal(updateBooking.paymentID);
                done();
            });
    });

    //delete
    it(`Should return deleted booking when /booking/id is deleted`, (done) => {
        //mock request
        chai.request(app)
            .delete(`/booking/${bookingID}`)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(updateBooking));
                expect(res.body.name).to.equal(updateBooking.name);
                expect(res.body.movieID._id).to.equal(updateBooking.movieID._id);
                expect(res.body.day).to.equal(updateBooking.day);
                expect(res.body.time).to.equal(updateBooking.time);
                expect(res.body.noOfTickets.adult).to.equal(updateBooking.noOfTickets.adult);
                expect(res.body.noOfTickets.child).to.equal(updateBooking.noOfTickets.child);
                expect(res.body.noOfTickets.senior).to.equal(updateBooking.noOfTickets.senior);
                expect(res.body.paymentID).to.equal(updateBooking.paymentID);
                done();
            });
    });
});
