// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

const geo = require('./geometry');
const util = require('./utilities');

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fourth = {b: 3, a: 2};
const fifth = {a: {g: 3}, b:{c: 4, d: 5}};
const sixth = {b: {d: 5, c: 4}, a: {g: 3}};
const testArr1 = ["a", "a", "b", "a", "b", "c"];
const testArr2 = ["a", "b", "c"];
const testArr3 = [];
const testArr4 = [1,2,"a","b",1];
const testArr5 = ['a','ok','ok','a','b','a','ok']

try {
    console.log(util.deepEquality(first, second))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.deepEquality(first, third))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.deepEquality(first, fourth))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.deepEquality(3, third))
} catch (error) {
    console.log(error)
}
try {
    console.log(util.deepEquality(fifth, sixth))
} catch (error) {
    console.log(error)
}



try {
    console.log(util.uniqueElements(2))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements('ok'))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements(testArr1))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements(testArr2))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements(testArr3))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements(testArr4))
} catch (error) {
    console.log(error)
}

try {
    console.log(util.uniqueElements(testArr5))
} catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(1,2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(-1,2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(0,2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(1,2,'a'))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism())
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfRectangularPrism(1,1,1))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism(1,2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism(-1,2,3))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.surfaceAreaOfRectangularPrism(0,2,3))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.surfaceAreaOfRectangularPrism(1000,2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfRectangularPrism('b',2,3))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.surfaceAreaOfRectangularPrism(2,3))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.volumeOfSphere(1))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.volumeOfSphere(-1))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.volumeOfSphere(0))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.volumeOfSphere(5))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.volumeOfSphere(100))
}catch (error) {
    console.log(error)
}
try {
    console.log(geo.volumeOfSphere('a'))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere('a'))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere(1))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere(0))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere(-1))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere(5))
}catch (error) {
    console.log(error)
}

try {
    console.log(geo.surfaceAreaOfSphere(.1))
}catch (error) {
    console.log(error)
}

try {
    console.log(util.countOfEachCharacterInString())
}catch (error) {
    console.log(error)
}

try {
    console.log(util.countOfEachCharacterInString(3))
}catch (error) {
    console.log(error)
}

try {
    console.log(util.countOfEachCharacterInString("this is a Test"))
}catch (error) {
    console.log(error)
}

try {
    console.log(util.countOfEachCharacterInString("ooooooooooooooo"))
}catch (error) {
    console.log(error)
}

try {
    console.log(util.countOfEachCharacterInString("Hello, the pie is in the oven"))
}catch (error) {
    console.log(error)
}