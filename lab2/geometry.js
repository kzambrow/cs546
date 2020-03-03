// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System
function checkInputRectPrism(length, width, height) {
    if (length == undefined) throw 'length must be given';
    if (width == undefined) throw 'width must be given';
    if (height == undefined) throw 'height must be given';
    if (typeof length != 'number') throw 'length must be a number';
    if (typeof width != 'number') throw 'width must be a number';
    if (typeof height != 'number') throw 'height must be a number';
    if (length < 0) throw 'length must be positive';
    if (width < 0) throw 'width must be positive';
    if (height < 0) throw 'height must be positive';
    if (length == 0) throw 'length cannot be zero';
    if (width == 0) throw 'width cannot be zero';
    if (height == 0) throw 'height cannot be zero';
}

function checkInputSphere(radius) {
    if (radius == undefined) throw 'radius must be given';
    if (typeof radius != 'number') throw 'radius must be a number';
    if (radius < 0) throw 'radius must be negative';
    if (radius == 0) throw 'radius cannot be zero';
}

function volumeOfRectangularPrism(length, width, height) {
    checkInputRectPrism(length, width, height);
    return (length * width * height);
}

function surfaceAreaOfRectangularPrism(length, width, height) {
    checkInputRectPrism(length, width, height);
    return (2*length*width + 2*height*width + 2*height*length); 
}

function volumeOfSphere(radius) {
    checkInputSphere(radius);
    return ((4/3)*Math.PI*Math.pow(radius, 3));
}

function surfaceAreaOfSphere(radius) {
    checkInputSphere(radius);
    return (4*Math.PI*Math.pow(radius,2));
}

module.exports = {
    firstName: "Kamil", 
    lastName: "Zambrowski", 
    studentId: "10428741",
    volumeOfSphere,
    volumeOfRectangularPrism,
    surfaceAreaOfSphere,
    surfaceAreaOfRectangularPrism
};