// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(str) {
    if (typeof str != 'string') throw 'Input must be a string';
    return str;
}

function lookupDefinition(inputVal) {
    checkInput(inputVal);
    if (words[inputVal] == undefined) throw 'Word is undefined';
    if (words[inputVal] != undefined) return words[inputVal];
}

function getWord(str) {
    checkInput(str);
    const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);
    //https://stackoverflow.com/questions/13274050/get-key-using-value-from-an-object-in-javascript?lq=1
    let tempWord = getKey(words, str);
    if (tempWord == undefined){
        throw "Word not found"
    }
    return tempWord;
}

module.exports = {
    firstName: "Kamil", 
    lastName: "Zambrowski", 
    studentId: "10428741",
    lookupDefinition,
    getWord
};