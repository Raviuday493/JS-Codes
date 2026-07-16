let score = "33abc";
console.log(typeof score);//string

let valInNumber = Number(score);
console.log(typeof valInNumber);//Number
console.log(valInNumber);//NaN

let isloggedIn = 1;
let boolisloggedIn = Boolean(isloggedIn);
console.log(typeof boolisloggedIn);//boolean
console.log(boolisloggedIn);//true

//when converting anything to boolean
// 1 => true;0=>false
//""=>false;"non-EmptyString"=>true

// we can also convert anything to String just as boolean and Number

