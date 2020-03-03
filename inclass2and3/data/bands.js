
// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
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
        }
        const insertInfo = await bandCollection.insertOne(newBand);
        if (insertInfo.insertedCount === 0) throw "could not add band";
        return newBand;
    },
    async getAllBands() {
        const bandCollection = await bands();
        const bandList = await bandCollection.find({}).toArray();
        return bandList;
    },
    async getBand(id) {
        if (!id) throw "id must be given"
        const bandCollection = await bands();
        const band = await bandCollection.findOne({ _id: id});
        if (band === null) throw "band with that id does not exist";
        return band;
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
        if (updatedBands.modifiedCount === 0) {
            throw 'could not update band';
        }
        return newBand;
    },

    async removeBand(id) {
        if (!id) throw "band id must be given";
        const bandCollection = await bands();
        const deleteInfo = await bandCollection.deleteOne({_id: id });
        if (deleteInfo.deletedCount === 0) {
            throw 'Could not delete band with id of ${id}';
        }
        return true;
    }
}