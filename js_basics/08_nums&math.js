const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(balance);



// console.log(balance.toFixed(2));


const num = 123.8993;
 //round off to 4 digits
// console.log(num.toPrecision(4));


const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));


// ********** Maths in js ****************

console.log(Math.abs(-4));//neg to pos only not vice versa 
console.log(Math.round(4.7));//round off
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// Math.random() always gives values between 0 and 1
// console.log((Math.random()*10) + 1);this gives values btween 1 and 9 
// console.log((Math.floor(Math.random()*10) + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
