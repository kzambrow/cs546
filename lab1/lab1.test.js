//Kamil Zambrowski
//I Pledge My Honor That I Have Abided By The Stevens Honor System

const lab1 = require("./lab1");

console.log(lab1.questionOne([4,1,5,6]));
// 78
console.log(lab1.questionOne([1,2,3,4,5]));
// 55
console.log(lab1.questionOne([17,3]));
// 298
console.log(lab1.questionOne([9,8,7,6,5]));
// 255
console.log(lab1.questionOne([4,3,6,5,2,5,7,3,1]));
// 174
console.log(lab1.questionTwo(7)); 
// 13 
console.log(lab1.questionTwo(1)); 
// 1 
console.log(lab1.questionTwo(20)); 
// 6765 
console.log(lab1.questionTwo(5)); 
// 5 
console.log(lab1.questionTwo(30)); 
// 832040
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// 196
console.log(lab1.questionThree("Hello"));
// 2
console.log(lab1.questionThree(""));
// 0
console.log(lab1.questionThree("Rhythm"));
// 0
console.log(lab1.questionThree("ooOOOo"));
// 6
console.log(lab1.questionFour(10)); 
// 3628800 
console.log(lab1.questionFour(1)); 
// 1 
console.log(lab1.questionFour(-1)); 
// NaN
console.log(lab1.questionFour(15)); 
// 1307674368000
console.log(lab1.questionFour(8)); 
// 40320 