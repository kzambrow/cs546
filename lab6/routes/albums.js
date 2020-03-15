// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System
const express = require("express");
const router = express.Router();
const data = require("../data");
const albums = data.albums;
const bands = data.bands;

router.get('/:id', async (req, res) =>{
    try {
        const album = await albums.getAlbum(req.params.id);
        res.json(album);
        res.status(200).send();
    } catch (e) {
        res.status(404).json({message: "album with this id not found"});
    }
});

router.get('/', async (req, res) =>{
    try {
        const allAlbums = await albums.getAllAlbums();
        res.json(allAlbums);
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "no albums exist right now"});
    }
});

router.post("/", async (req, res) =>{
    let albumInfo = req.body;
    if (!albumInfo) {
        res.status(400).json({message: "must provide the information for the album"});
        return;
    }
    if (!albumInfo.title || (typeof albumInfo.title != "string") || albumInfo.title.length == 0) {
        res.status(400).json({message: "must provide title, and it must be a non empty string"});
        return;
    }
    if (!albumInfo.author || (typeof albumInfo.author != "string") || albumInfo.author.length == 0) {
        res.status(400).json({message: "must provide an author, and it must be a non empty string"});
        return;
    }
    if (!albumInfo.songs || (!Array.isArray(albumInfo.songs)) || albumInfo.songs.length == 0) {
        res.status(400).json({message: "must provide songs, and they must be in a non empty array"});
        return;
    }
    try {
        const { title, author, songs } = albumInfo;
        const newAlbum = await albums.createAlbum(title, author, songs);
        res.json(newAlbum);
        res.status(200).send();
    } catch (e) {
        res.status(500).json({ message: e });
        console.log(e);
    }
});

router.patch('/:id', async (req, res)=>{
    let albumInfo = req.body;
    let updatedAlbum = {};
    if (!albumInfo) {
        res.status(400).json({message: "must provide the information for the album"});
        return;
    }
    try {
        const oldAlbum = await albums.getAlbum(req.params.id);
        if (albumInfo.newTitle && albumInfo.newTitle !== oldAlbum.title) updatedAlbum.title = albumInfo.newTitle;
        if (albumInfo.newSongs && albumInfo.newSongs !== oldAlbum.Songs) updatedAlbum.Songs = albumInfo.newSongs;
    } catch (e) {
        res.status(404).json({message: "album with this id not found"});
        return;
    }
    
    try {
        const newAlbum = await albums.updateAlbum(req.params.id, updatedAlbum);
        res.json(newAlbum);
        res.status(200).send();
    } catch (e) {
        res.status(404).json({message: "album with this id not found"});
        console.log(e);
        return;
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await albums.getAlbum(req.params.id);
    } catch (e) {
        res.status(404).json({message: "album with this id not found"});
        return;
    }
    try {
        const currentAlbum = await albums.getAlbum(req.params.id);
        res.json({
            "deleted": true,
            "data": currentAlbum
        });
        await albums.removeAlbum(req.params.id);
        res.status(200).send();
    } catch (e) {
        res.status(500).send();
        console.log(e);
    }
});

module.exports = router;