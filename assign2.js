// using process.argv
const myVal = process.argv;

//creating an array
let arr1 = [];

// adding third value
arr1.push(myVal[2]);

// console log third value
console.log(arr1);

// converting 3rd value into numbers
arr1.push(Number(myVal[2]));

//convertion 4th value into number
arr1.push(Number(myVal[3]));

// adding both valus
let a = Number(myVal[2])+Number(myVal[3]);

// console log the sum
console.log(a);
