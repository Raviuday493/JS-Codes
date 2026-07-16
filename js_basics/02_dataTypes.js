"use strict"; // this means treat all JS code as new version




// alert(3+2);// we are using node.js not browser

let name = "Ravi";
let age = 20;
let isLogged = true;

//  data types => number(int),string.boolean,null,symbol
// null is standalone value given to variables 
// symbol=>unique elements

//objects we will discuss in coming lec

console.log(typeof age);//number
console.log(typeof null);//object
console.log(typeof undefined);//undefined


// Data types are divided into 2 categories
//1.Primitive Data types->are call by value->7 types=>
//String,Number,boolean,null,symbol,undefined,BigInt

//2.Non-Primitive Data types->also called Reference data types bec they are call by reference=>Arrays,objects,functions

//these two data types are divided on the basis of how they are stored in memory and how they are accessed from the memory

//Symbols->A Symbol is a unique and immutable (cannot be changed) value.

let id = Symbol('123');
let id2= Symbol('123');
console.log(id == id2);//Even if two symbols have the same description, they are never equal.
console.log(id === id2);


// Reference Data Types->arrays,objects,functions

//1.Arrays
const arr = ["shaktiman" , "gangadhar"];
//2.Objects->curly braces ke andhar
let myObj = {
    name:"Ravi",
    age:20
}

console.log(typeof arr);//typeof array is object

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



