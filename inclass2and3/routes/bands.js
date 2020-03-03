// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System
const express = require("express");
const router = express.Router();
const bands = require('../data/bands.js');

router.get('/:id', async (req, res) => {
    try {
        const band = await bands.getBand(req.params.id);
        res.json(band);
    } catch (e) {
        res.status(404).json({ message: 'band not found' });
    }
});

router.get('/', async (req, res) => {
    try {
        const bandList = await bands.getAllBands();
        res.json(bandList);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;