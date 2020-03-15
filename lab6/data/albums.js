// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const mongoCollections = require("../config/mongoCollections");
const albums = mongoCollections.albums;
const bands = mongoCollections.bands;
const uuid = require('uuid/v4');
// Pretty much entirely used lecture code base as reference
module.exports = {
    async createAlbum(title, author, songs) {
        if (!title) throw "title is missing";
        if (!author) throw "author is missing";
        if (!songs) throw "songs are missing";
        if (!Array.isArray(songs)) throw "songs must be in an array";
        if (typeof title != "string") throw "title must be a string";
        if (typeof author != "string") throw "author must be a string";
        if (songs.length <= 0) throw "there cannot be 0 or less songs in an album";
        const albumCollection = await albums();
        let newAlbum = {
            _id: uuid(),
            title: title,
            author: author,
            songs: songs,
        }
        const insertInfoAlbum = await albumCollection.insertOne(newAlbum);
        if (insertInfoAlbum.insertedCount === 0) throw "could not add album";

        const newId = insertInfoAlbum.insertedId;

        // const band = await bandFunctions.addAlbumToBand(author, newId);

        const bandCollection = await bands();
        const updateInfo = await bandCollection.updateOne({ _id: author}, {$addToSet: {albums: newId}});
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw "could not add album to band";
        return await this.getAlbum(newId);
    },

    async getAllAlbums() {
        const albumCollection = await albums();
        const albumList = await albumCollection.find({}).toArray();
        if (albumList.length === 0) throw "no albums in the list";
        var expandedAlbums = [];
        for (i=0; i<albumList.length; i++) {
            var expandedAlbum = await this.getAlbum(albumList[i]._id);
            expandedAlbums.push(expandedAlbum);
            }
        return expandedAlbums;
        },
    async getAlbum(id) {
        if (!id) throw "id must be given"
        const albumCollection = await albums();
        const bandCollection = await bands();
        const album = await albumCollection.findOne({ _id: id});
        const authorId = album.author;
        const band = await bandCollection.findOne({ _id: authorId});
        if (!band) throw "band with that author does not exist";
        if (!album) throw "album with that id does not exist";
        var expandedAlbum = {
            _id: id,
            title: album.title,
            author: {
                _id: album.author,
                bandName: band.bandName
            },
            songs: album.songs
        }
        return expandedAlbum;
    },

    async updateAlbum(id, updatedAlbum) {
        if (!id) throw "id is missing";
        if (!updatedAlbum) throw "album is missing";
        const albumCollection = await albums();
        const updatedAlbumData = {};

        if (updatedAlbum.title) {
            updatedAlbumData.title = updatedAlbum.title;
        }

        if (updatedAlbum.songs) {
            updatedAlbumData.songs = updatedAlbum.songs;
        }
        const updateInfoAlbum = await albumCollection.updateOne({ _id: id }, { $set: updatedAlbumData });
        if (updateInfoAlbum.modifiedCount === 0) throw "could not update album";
        return await this.getAlbum(id);
    },

    async removeAlbum(albumId) {
        if (!albumId) throw "album id must be given";
        const albumCollection = await albums();
        let album = await this.getAlbum(albumId);
        const deleteInfo = await albumCollection.removeOne({ _id: albumId});
        if (deleteInfo.deletedCount === 0) {
            throw "could not delete post with id of ${albumId}";
        }
        // await bandFunctions.removeAlbumFromBand(album.author.id, albumId);
        const bandCollection = await bands();
        const updateInfo = await bandCollection.updateOne({_id: album.author._id}, {$pull: {albums: albumId}});
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw "could not remove album from band";
        return true;
    }
}
