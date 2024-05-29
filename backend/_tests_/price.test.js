const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Price } = require('../Models/Price');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../index')

describe(`Price routes`, () => {

    //test data
    let priceID;

    let testPrice = {
        adult: 12.99,
        child: 9.98,
        senior: 10.45
    };

    const updatePrice = {
        adult: 32.99,
        child: 28.98,
        senior: 25.45
    }

    //create
    it(`Should return posted price when price is posted`, (done) => {
        //mock request
        chai.request(app)
            .post("/price")
            .send(testPrice)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                priceID = res.body._id;
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(testPrice));
                expect(res.body.adult).to.equal(testPrice.adult);
                expect(res.body.child).to.equal(testPrice.child);
                expect(res.body.senior).to.equal(testPrice.senior);
                done();
            });

    });

    //read
    it(`Should return prices when /price is accessed`, (done) => {
        //mock request
        chai.request(app)
            .get("/price")
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
                    expect(item).to.contain.keys(Object.keys(testPrice));
                    expect(item.adult).to.equal(testPrice.adult);
                    expect(item.child).to.equal(testPrice.child);
                    expect(item.senior).to.equal(testPrice.senior);
                });
                done();
            });
    });

    //update
    it(`Should return updated prices when /price is updated`, (done) => {
        //mock request
        chai.request(app)
            .put(`/price/${priceID}`)
            .send(updatePrice)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(updatePrice));
                expect(res.body.adult).to.equal(updatePrice.adult);
                expect(res.body.child).to.equal(updatePrice.child);
                expect(res.body.senior).to.equal(updatePrice.senior);
                done();
            });
    });

    //delete
    it(`Should return deleted prices when /price is deleted`, (done) => {
        //mock request
        chai.request(app)
            .delete(`/price/${priceID}`)
            .end((err, res) => {
                if (err) {
                    console.log(`Something went wrong: ${err}`);
                    done(err);
                }
                //assert
                expect(res).to.have.status(201);
                expect(res).to.not.be.null;
                expect(res.body).to.be.a("Object");
                expect(res.body).to.contain.keys(Object.keys(updatePrice));
                expect(res.body.adult).to.equal(updatePrice.adult);
                expect(res.body.child).to.equal(updatePrice.child);
                expect(res.body.senior).to.equal(updatePrice.senior);
                done();
            });
    });


});
