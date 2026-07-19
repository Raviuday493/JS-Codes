// Dates->JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


let myDate = new Date();// we have made object of date
//console.log(myDate);//not readable
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate);//This can be interview question

// We can also create our custom date

let myCreatedDate = new Date(2024,3,24);//(year,month,date) Important: Month starts from 0, not 1 so month 0 is jan and month 1 is feb.
//we can also some more parameters in date constructor,which will relate to time.

let myCreatedDate2 = new Date(2024,3,24,5,3);

let myCreatedDate3 = new Date("2024-03-24");//(Year-month-day) in this case the month starts from 1 not 0 be carefull here.

let myCreatedDate4 = new Date("04-24-2024");//(Month-day-year)

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

//Time

let TimeStamp = Date.now();
//console.log(TimeStamp);// this will print in milliseconds How does JavaScript calculate it?
// Internally, your computer's operating system keeps track of the current time.
// When you call:
// Date.now();
// JavaScript asks the operating system:
// "How many milliseconds have passed since January 1, 1970 UTC?"
// The OS returns that number.
// So JavaScript isn't counting from 1970 every time—it simply retrieves the current timestamp maintained by the operating system.

//Date.now()->this always gives value in milliseconds.to convert into seconds do this 
//console.log(Math.floor(Date.now()/1000));//will give ans in seconds

// if we want only months or day for any date then we can use this
let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth() + 1);//you know why i have added 1 here
console.log(date.getFullYear());

date.toLocaleString('default',{
    weekday : "long"
})




