//Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const animals = require('./data/animals');
const connection = require('./mongoConnection');

const main = async () => {
    const animal1 = await animals.create("Sasha", "Dog");
    console.log(animal1);
    const animal2 = await animals.create("Lucy", "Dog");
    const allCurAnimals1 = await animals.getAll();
    console.log(allCurAnimals1);
    const animal3 = await animals.create("Duke", "walrus");
    console.log(animal3);
    const updatedAnimal = await animals.rename(animal1._id, "Sashita");
    console.log(updatedAnimal);
    await animals.remove(animal2._id);
    const allCurAnimals2 = await animals.getAll();
    console.log(allCurAnimals2);
    const db = await connection();
    await db.serverConfig.close();
    console.log("Done!");
    
};

main().catch((error) => {
    console.log(error);
});