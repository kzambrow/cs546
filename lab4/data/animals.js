
// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;

module.exports = {
    async create(name, animalType) {
        if (!name) throw "name must be given";
        if (!animalType) throw "animal type must be given";
        if (typeof name != "string") throw "name must be a string";
        if (typeof animalType != "string") throw "animal type must be a string";
        const animalCollection = await animals();
        let newAnimal = {
            name: name,
            animalType: animalType
        }
        const insertInfo = await animalCollection.insertOne(newAnimal);
        if (insertInfo.insertedCount === 0) throw "could not add animal";
        return newAnimal;
    },

    async getAll() {
        const animalCollection = await animals();
        const animalList = await animalCollection.find({}).toArray();
        return animalList;
    },

    async get(id) {
        if (!id) throw "id must be given"
        const animalCollection = await animals();
        const animal = await animalCollection.findOne({ _id: id});
        if (animal === null) throw "animal with that id does not exist";
        return animal;
    },

    async remove(id) {
        if (!id) throw "id must be given";
        const animalCollection = await animals();
        const animal = await animalCollection.findOne({ _id: id});
        const deleteInfo = await animalCollection.deleteOne({_id: id });
        if (deleteInfo.deletedCount === 0) {
            throw 'Could not delete animal with id of ${id}';
        }
        return animal;
    },

    async rename(id, newName) {
        if (!id) throw "must provide an id"
        if (!newName) throw "must give a new name"
        if (typeof newName != "string") "new name must be a string"
        const animalCollection = await animals();
        const animal = await animalCollection.findOne({ _id: id});
        if (animal === null) throw "animal with that id does not exist";
        const newAnimal = {
            name: newName,
            animalType: animal.animalType
        }
        const updatedAnimal = await animalCollection.updateOne({ _id: id }, { $set: newAnimal });
        if (updatedAnimal.modifiedCount === 0) {
            throw 'could not update animal';
        }
        return await this.get(id);
    }
}