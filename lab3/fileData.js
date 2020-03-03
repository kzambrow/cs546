const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require("fs"));

// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

function stringChecker(path) {
    if (path == undefined) throw "file path must be given";
    if (typeof path != 'string') throw "path must be a string";
}

async function getFileAsString(path) {
    stringChecker(path);
    if (!fs.existsSync(path)) throw "file does not exist in directory";
    let string_promise = await fs.readFileAsync(path, "utf-8");
    return string_promise;
}

async function getFileAsJSON(path) {
        stringChecker(path);
        try {
        let string_promise = await getFileAsString(path);
        return JSON.parse(string_promise);
        } catch (error) {
            throw error;
        }
}

async function saveStringToFile(path, text) {
    stringChecker(path);
    if (text == undefined) throw "text must be given";
    if (typeof text != 'string') throw "text must be a string";
    // https://stackoverflow.com/questions/2496710/writing-files-in-node-js
    fs.writeFile(path, text, function(err) {
        if (err){
            throw err;
        }
    });
    return true;
}

async function saveJSONToFile(path, obj) {
    stringChecker(path);
    if (obj == undefined) throw "object must be given";
    if (typeof obj != 'object') throw "input must be an object";
    const json = JSON.stringify(obj);
    // https://stackoverflow.com/questions/2496710/writing-files-in-node-js
    fs.writeFile(path, json, function(err) {
        if (err) {
            throw err;
        }
    });
    return true;
}

module.exports = {
    firstName: "Kamil",
    lastName: "Zambrowski",
    studentId: "10428741",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile,
    stringChecker
};

