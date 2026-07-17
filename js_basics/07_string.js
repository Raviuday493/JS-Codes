const name = "Ravi";
const name2 = new String('Ravi');//2 ways to declare a string
const repo = 40;
// console.log(name + repo); outdated  way of concatenation

console.log(`Hi my name is  ${name} and my repo count is  ${repo}`);//this is called string interpolation
// console.log(name[1]); 
// console.log(name.charAt(2));
// console.log(name.length);

const newString = "     Ravi    ";
//Trim cuts the whitespaces in the string
// console.log(newString.trim());

const url = "https://ravi%20.com";
console.log(url.replace('%20','->'));



 

