// Two types of memory->Stack(Primitive) and heap(Non-Primitive)

let name = "Ravi";
let name2 = name;

name2 = "uday";//change by value change will be visible only on this var not on name
console.log(name);//Ravi
console.log(name2);//uday

//Non Primitive Data Types
let userOne = {
    email:"abc.com"
}

let userTwo = userOne;
userTwo.email = "ravi.com";//change by reference values will be changed in both the variables

console.log(userOne.email);


