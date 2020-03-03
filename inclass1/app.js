// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const dictionary = require('./dictionary');

try {
    console.log(dictionary.lookupDefinition("programming"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.lookupDefinition("test"))
}catch (error) {
    console.log(error)
}
try {
    console.log(dictionary.lookupDefinition("foray"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.lookupDefinition("charisma"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.lookupDefinition("fail"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.getWord("The action of process of writing computer programs."))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.getWord("Something fake."))
}catch (error) {
    console.log(error)
}
try {
    console.log(dictionary.getWord("A sudden or irregular invasion or attack for war or spoils : raid"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.getWord("Not a real definition"))
}catch (error) {
    console.log(error)
}

try {
    console.log(dictionary.getWord("A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)"))
}catch (error) {
    console.log(error)
}