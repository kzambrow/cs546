// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const bands = require('../data/bands');
const connection = require('../config/mongoConnection');

const main = async () => {
    const band1 = await bands.addBand("someGuys", ["FirstGuy", "SecondGuy"], 2020, ["Rock"], "GuyMusic");
    console.log("someGuys has been added");
    const band2 = await bands.addBand("someGals", ["FirstGal", "SecondGal", "ThirdGal"], 2000, ["Jazz", "Rap"], "GalMusic");
    console.log("someGals has been added");
    const band3 = await bands.addBand("BandTHREEEEEEE", ["Three", "Two", "One"], 2000, ["Reggae"], "GuyMusic");
    console.log("BandTHREEEEEEE has been added");
    const band4 = await bands.addBand("OneGuyBand", ["Guy Solo"], 2007, ["Rock", "Country"], "GuyMusic");
    console.log("OneGuyBand has been added");
    const band5 = await bands.addBand("OneGalBand", ["Gal Solo"], 2008, ["Jazz", "Punk"], "GalMusic");
    console.log("OneGalBand has been added");
    const allBands = await bands.getAllBands();
    console.log(allBands);
    const db = await connection();
    await db.serverConfig.close();
    console.log("Done!");
};

main().catch((error) => {
    console.log(error);
});
