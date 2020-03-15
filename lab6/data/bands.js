// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const albums = mongoCollections.albums;
const albumFunctions = require("./albums.js");
const uuid = require('uuid/v4');
// Pretty much entirely used lecture code base as reference
module.exports = {
    async addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
        if (!Array.isArray(bandMembers)) throw "bandMembers must be an array";
        if (!Array.isArray(genres)) throw "genres must be an array";
        if (!bandName) throw "band Name is missing";
        if (!bandMembers) throw "band Members is missing";
        if (!yearFormed) throw "year formed is missing";
        if (!genres) throw "genres is missing";
        if (!recordLabel) throw "recordLabel is missing";
        if (bandMembers.length <= 0) throw "There cannot be zero or less band members";
        if (genres.length <= 0) throw "There cannot be zero or less genres";
        const bandCollection = await bands();
        let newBand = {
            bandName: bandName,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            recordLabel: recordLabel,
            _id: uuid(),
            albums: []
        }
        const insertInfo = await bandCollection.insertOne(newBand);
        if (insertInfo.insertedCount === 0) throw "could not add band";
        return await this.getBand(insertInfo.insertedId);
    },
    async getAllBands() {
        const bandCollection = await bands();
        const bandList = await bandCollection.find({}).toArray();
        if (bandList.length === 0) throw "no bands in the collection";
        var expandedBands = [];
        for (i=0; i<bandList.length; i++) {
            if (bandList[i].albums.length === 0) {
                expandedBands.push(bandList[i]);
            } else {
            var expandAlbums = [];
            for (j=0; j<bandList[i].albums.length; j++) {
                let curAlbum = await albumFunctions.getAlbum(bandList[i].albums[j]);
                var tempObj = {
                    _id: bandList[i].albums[j],
                    title: curAlbum.title,
                    author: curAlbum.author._id,
                    songs: curAlbum.songs
                }
                expandAlbums.push(tempObj);
            }
            const expandedBand = {
                _id: bandList[i]._id,
                bandName: bandList[i].bandName,
                bandMembers: bandList[i].bandMembers,
                yearFormed: bandList[i].yearFormed,
                genres: bandList[i].genres,
                recordLabel: bandList[i].recordLabel,
                albums: expandAlbums
            }
            expandedBands.push(expandedBand);
        }
    }
        return expandedBands;
        
    },
    async getBand(id) {
        if (!id) throw "id must be given";
        const bandCollection = await bands();
        const band = await bandCollection.findOne({ _id: id});
        if (!band) throw "band with that id does not exist";
        // return band;
        if (band.albums.length === 0) {
            return band;
        }
        var expandAlbums = [];
        for (i = 0; i<band.albums.length; i++) {
            let curAlbum = await albumFunctions.getAlbum(band.albums[i]);
            var tempObj = {
                _id: band.albums[i],
                title: curAlbum.title,
                author: curAlbum.author._id,
                songs: curAlbum.songs
            }
            expandAlbums.push(tempObj);
        }
        const expandedBand = {
            _id: id,
            bandName: band.bandName,
            bandMembers: band.bandMembers,
            yearFormed: band.yearFormed,
            genres: band.genres,
            recordLabel: band.recordLabel,
            albums: expandAlbums
        }
        return expandedBand;
    },

    async updateBand(bandId,bandName,bandMembers,yearFormed,genres,recordLabel) {
        if (!bandId) throw "band id must be given";
        if (!bandName) throw "band Name is missing";
        if (!bandMembers) throw "band Members is missing";
        if (!yearFormed) throw "year formed is missing";
        if (!genres) throw "genres is missing";
        if (!recordLabel) throw "recordLabel is missing";
        if (bandMembers.length <= 0) throw "There cannot be zero or less band members";
        if (genres.length <= 0) throw "There cannot be zero or less genres";
        if (!Array.isArray(bandMembers)) throw "bandMembers must be an array";
        if (!Array.isArray(genres)) throw "genres must be an array";
        const bandCollection = await bands();
        const newBand = {
            bandName: bandName,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            recordLabel: recordLabel,
        }
        const updatedBands = await bandCollection.updateOne({ _id: bandId }, { $set: newBand });
        if (!updatedBands.matchedCount && !updateBands.modifiedCount) {
            throw 'could not update band';
        }
        return await this.getBand(bandId);
    },

    async addAlbumToBand(bandId, albumId) {

        const bandCollection = await bands();
        const updateInfo = await bandCollection.updateOne({ _id: bandId}, {$addToSet: {albums: albumId}});
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw "could not add album to band";
        // return await this.getBand(bandId);
    },

    async removeBand(id) {
        if (!id) throw "band id must be given";
        const bandCollection = await bands();
        const band = await bandCollection.findOne({ _id: id});
        if (!band) throw "band with that id does not exist";

        for (i = 0; i<band.albums.length; i++) {
            await albumFunctions.removeAlbum(band.albums[i]);
        }
        const deleteInfo = await bandCollection.deleteOne({_id: id });
        if (deleteInfo.deletedCount === 0) {
            throw 'Could not delete band with id of ${id}';
        }
        return true;
    },

}