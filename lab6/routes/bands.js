// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System
const express = require("express");
const router = express.Router();
const bands = require('../data/bands.js');


router.get('/:id', async (req, res) => {
    try {
        const band = await bands.getBand(req.params.id);
        res.json(band);
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'band not found' });
    }
});

router.get('/', async (req, res) => {
    try {
        const bandList = await bands.getAllBands();
        res.json(bandList);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "no bands exist right now"});
    }
});

router.post('/', async (req, res) => {
    let bandInfo = req.body;
    if (!bandInfo) {
        res.status(400).json({message: "must provide the information for the band"});
        return;
    }
    if (!bandInfo.bandName || (typeof bandInfo.bandName != "string") || bandInfo.bandName.length == 0) {
        res.status(400).json({message: "name must be given and it must be a string and it cannot be an empty string"});
        return;
    }
    if (!bandInfo.bandMembers || (!Array.isArray(bandInfo.bandMembers)) || bandInfo.bandMembers.length == 0) {
        res.status(400).json({message: "band members must be in an array and cannot be empty"});
        return;
    }
    if (!bandInfo.yearFormed || (typeof bandInfo.yearFormed != "number")) {
        res.status(400).json({message: "year formed must be given and must be an integer"});
        return;
    }
    if (!bandInfo.genres || (!Array.isArray(bandInfo.genres)) || bandInfo.genres.length == 0) {
        res.status(400).json({message: "genres must be given, must be an array, and cannot be an empty array"});
        return;
    }
    if (!bandInfo.recordLabel || (typeof bandInfo.recordLabel != "string") || bandInfo.recordLabel.length == 0) {
        res.status(400).json({message: "recordLabel must be given, and must be a string that is not empty"});
        return;
    }
    try {
        const newBand = await bands.addBand(bandInfo.bandName, bandInfo.bandMembers, bandInfo.yearFormed, bandInfo.genres, bandInfo.recordLabel);
        res.json(newBand);
        res.status(200).send();
    } catch(e) {
        res.status(500).send();
    }
});

router.put('/:id', async(req, res) => {
    let bandInfo = req.body;
    if (!bandInfo) {
        res.status(400).json({message: "must provide the information for the band"});
        return;
    }
    if (!bandInfo.bandName || (typeof bandInfo.bandName != "string") || bandInfo.bandName.length == 0) {
        res.status(400).json({message: "name must be given and it must be a string and it cannot be an empty string"});
        return;
    }
    if (!bandInfo.bandMembers || (!Array.isArray(bandInfo.bandMembers)) || bandInfo.bandMembers.length == 0) {
        res.status(400).json({message: "band members must be in an array and cannot be empty"});
        return;
    }
    if (!bandInfo.yearFormed || (typeof bandInfo.yearFormed != "number")) {
        res.status(400).json({message: "year formed must be given and must be an integer"});
        return;
    }
    if (!bandInfo.genres || (!Array.isArray(bandInfo.genres)) || bandInfo.genres.length == 0) {
        res.status(400).json({message: "genres must be given, must be an array, and cannot be an empty array"});
        return;
    }
    if (!bandInfo.recordLabel || (typeof bandInfo.recordLabel != "string") || bandInfo.recordLabel.length == 0) {
        res.status(400).json({message: "recordLabel must be given, and must be a string that is not empty"});
        return;
    }
    try {
        await bands.getBand(req.params.id);
    } catch(e) {
        res.status(404).json({message: "band with this id does not exist"});
        return;
    }
    try {
        const updatedBand = await bands.updateBand(req.params.id, bandInfo.bandName, bandInfo.bandMembers, bandInfo.yearFormed, bandInfo.genres, bandInfo.recordLabel);
        res.json(updatedBand);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await bands.getBand(req.params.id);
    } catch(e) {
        res.status(404).json({message: "band with this id does not exist"});
        return;
    }
    try {
        const currentBand = await bands.getBand(req.params.id);
        res.json({
            "deleted": true,
            "data": currentBand
        });
        await bands.removeBand(req.params.id);
        res.status(200).send();
    } catch (e) {
        res.status(500).send();
        console.log(e);
    }
});

module.exports = router;