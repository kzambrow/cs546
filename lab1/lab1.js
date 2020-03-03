//Kamil Zambrowski
//I Pledge My Honor That I Have Abided By The Stevens Honor System

const questionOne = function questionOne(arr) {
    var sum = 0;
    for (i=0; i<arr.length; i++) {
        sum += ((arr[i]) * (arr[i]));
    }
    return sum;
}

const questionTwo = function questionTwo(num) {
    if (num < 1) {
        return 0;
    } else if (num == 1) {
        return 1;
    }
    else return (questionTwo(num-1) + questionTwo(num-2));
}

const questionThree = function questionThree(str) {
    var count = 0;
    var vowels = ['A','a','E','e','I','i','O','o','U','u'];
    for (i=0; i< str.length; i++) {
        for (j=0; j<vowels.length; j++) {
            if (str[i] == vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    if (num < 0) {
        return NaN;
    } else if (num == 0) {
        return 1;
    } else return (num * questionFour(num-1));
}

module.exports = {
    firstName: "Kamil", 
    lastName: "Zambrowski", 
    studentId: "10428741",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
