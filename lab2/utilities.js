// Kamil Zambrowski
// I Pledge My Honor That I Have Abided By The Stevens Honor System

function deepEquality(obj1, obj2) {
    if (obj1 == undefined) throw 'obj1 must be given';
    if (obj2 == undefined) throw 'obj2 must be given';
    if ((typeof obj1 != "object") || (typeof obj2 === null)) throw 'obj1 must be an object';
    if ((typeof obj2 != "object") || (typeof obj2 === null)) throw 'obj2 must be an object';
    var truth = deepEqualityHelper(obj1,obj2);
    return truth;

  function deepEqualityHelper(x,y) {
    // help from https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134
    if (x === y) {
        return true;
      }
      else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
          return false;
    
        for (var prop in x) {
          if (y.hasOwnProperty(prop))
          {  
            if (!deepEqualityHelper(x[prop], y[prop]))
              return false;
          }
          else
            return false;
        }
    
        return true;
      }
      else 
        return false;
    }
  }

function uniqueElements(arr) {
    if (arr==undefined) throw 'array must by given';
    if (Array.isArray(arr) == false) throw 'input must be an array';
    var tempArray = [];
    counter = arr.length;
    for (i=0; i<arr.length; i++) {
        if (tempArray.includes(arr[i])) {
            counter--;
        } else {
            tempArray.push(arr[i]);
        }
    }
    return counter;
}

function countOfEachCharacterInString(str) {
    if (str==undefined) throw 'string must be given';
    if (typeof str != 'string') throw 'input must be a string';
    // help from https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
    var counter = {};
    for (var i=0; i<str.length;i++) {
        var character = str.charAt(i);
        if (counter[character]) {
           counter[character]++;
        } else {
           counter[character] = 1;
        }
    }

    return counter;
}


module.exports = {
    firstName: "Kamil", 
    lastName: "Zambrowski", 
    studentId: "10428741",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};