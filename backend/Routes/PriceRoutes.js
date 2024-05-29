const express = require('express');
const router = express.Router();

const Price = require('../Models/Price');

//create price
router.post('/price', async (req, res) => {
    try {
        const prices = new Price(req.body);
        await prices.save(prices);
        res.status(201).send(prices);
    } catch {
        res.status(404).send({ error: `The request could not be completed` });
    }
});

//get all prices
router.get('/price', async (req, res) => {
    try {
        const prices = await Price.find();
        res.status(201).send(prices);
    }
    catch {
        res.status(404).send({ error: `No prices available` });
    }
});

//update price
router.put('/price/:id', async (req, res) => {
    try {
        const prices = await Price.findById(req.params.id);
        Object.assign(prices, req.body);
        await prices.save();
        res.status(201).send(prices);
    } catch {
        res.status(404).send({ error: `The prices could not be updated` });
    }
});

//delete price by id
router.delete('/price/:id', async (req, res) => {
    try {
        const prices = await Price.findById(req.params.id);
        await prices.deleteOne();
        res.status(201).send(prices);
    } catch {
        res.status(404).send({ error: `The prices could not be removed` });
    }
});

module.exports = router;