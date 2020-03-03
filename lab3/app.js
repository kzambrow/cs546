const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require("fs"));

// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

async function main(chapter) {
    let tempName = chapter.split('.');
    let filePath = tempName[0] + ".result.json";
    try {
        console.log(await fileData.getFileAsJSON(filePath));
        console.log("JSON file already exists");
    } catch(error) {
        try {
            console.log("JSON file does not exist, creating new JSON file")
            var str = await fileData.getFileAsString(chapter);
            var metrics = await textMetrics.createMetrics(str);
        } catch(error) {
            console.log(error);
        } try {
            await fileData.saveJSONToFile(filePath, metrics);
        } catch(error) {
            console.log(error);
        }
        console.log(metrics);
    }
    }
    
main("chapt.txt");
