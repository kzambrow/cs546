// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

async function createMetrics(text) {
    if (text == undefined) throw 'text must be given as input';
    if (typeof text != 'string') throw 'text must be a string';
    let newText = await text.toLowerCase(text);
    var output ={totalLetters: countLetters(newText),
                totalNonLetters: countNonLetters(newText),
                totalWords: countWords(newText),
                totalVowels: countVowels(newText),
                totalConsonants: countConsonants(newText),
                uniqueWords: countUniqueWords(newText),
                longWords: countLongWords(newText),
                averageWordLength: averageWordLen(newText),
                wordOccurrences: wordOccur(newText)};
    return output;
}


function countLetters(text) {
    var compare = /[a-z]/gi;
    var m = text.match(compare);
    return m.length;
}

function countNonLetters(text) {
    var compare = /[^a-z]/gi;
    var m = text.match(compare);
    return m.length;
}

function countVowels(text) {
    var compare = /[aeiou]/gi;
    var m = text.match(compare);
    return m.length;
}

function countConsonants(text) {
    var compare = /[bcdfghjklmnpqrstvwxyz]/gi;
    var m = text.match(compare);
    return m.length;
}

function countWords(text) {
    var count = 0;
    for (i=0; i<text.length; i++) {
        if (text.charAt(i).match(/[a-z]/gi)) {
            if (text.charAt(i+1).match(/[^a-z]/gi) || i==text.length-1) {
                count++;
            }
        }
    }
    return count;
}

function countUniqueWords(text) {
    var words = [];
    let newWords = text.split(/[^a-z]/gi);
    for (i=0; i<newWords.length; i++) {
        if (!words.includes(newWords[i])) {
            words.push(newWords[i]);
        }
    }
    // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    let forDeletion = [""];
    var finalWords = words.filter(item => !forDeletion.includes(item))
    return finalWords.length;
}

function countLongWords(text) {
    var count = 0;
    let newWords = text.split(/[^a-z]/gi);
    for (i=0; i<newWords.length; i++) {
        if (newWords[i].length >= 6) {
            count++;
        }
    }
    return count;
}

function averageWordLen(text) {
    var sum = 0;
    let newWords = text.split(/[^a-z]/gi);
    for (i=0; i<newWords.length; i++) {
        if (newWords[i].length > 0) {
            sum += newWords[i].length;
        }
    }
    return sum / countWords(text);
}

function wordOccur(text) {
    // help from https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
    var counter = {};
    let newWords = text.split(/[^a-z]/gi);
    for (var i=0; i<newWords.length; i++) {
        var cur = newWords[i];
        if (cur.length>0) {
            if (counter[cur]) {
                counter[cur]++;
            } else {
                counter[cur] = 1;
            }
        }
    }
    return counter;
}

module.exports = {
    firstName: "Kamil",
    lastName: "Zambrowski",
    studentId: "10428741",
    createMetrics
};
