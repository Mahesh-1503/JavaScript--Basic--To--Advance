/**
 * JavaScript Date Object
 * - The JavaScript Date object represents a single moment in time.
 * - The Date object is used to work with dates and times.
 * - The Date object is a built-in object in JavaScript.
 */

year, month, day, hours, minutes, seconds, milliseconds
let currentDate = new Date();
console.log(currentDate);//returns date and time
console.log(`--------------------------`)

const date = new Date()

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`year : ${year}`);//returns year
console.log(`month : ${month}`);//returns month
console.log(`day : ${day}`);   //returns day
console.log(`hours : ${hours}`);//returns hours
console.log(`minutes : ${minutes}`);//returns minutes
console.log(`seconds : ${seconds}`);//returns seconds
console.log(`milliseconds : ${milliseconds}`);//returns milliseconds

console.log(`--------------------------`);


/**
 * Different Formats
 * - The JavaScript Date object supports different date and time formats.
 * - The Date object supports the following date and time formats:
 * - The Date object supports the following date and time formats:
 */

//toDateString() IMPORTANT FOR PROJECT

const date1 = new Date();
const date2 = new Date();

console.log(date1.toDateString());
console.log(date2.toDateString());

console.log(`--------------------------`);

//toISOString()

const date3 = new Date();   
const date4 = new Date();

console.log(date3.toISOString());
console.log(date4.toISOString());

console.log(`--------------------------`);

//toLocaleDateString() IMPORTANT FOR PROJECT

const date5 = new Date();
const date6 = new Date();

console.log(date5.toLocaleDateString());
console.log(date6.toLocaleDateString());

console.log(`--------------------------`);

//toLocaleString() IMPORTANT FOR PROJECT

const date7 = new Date();
const date8 = new Date();

console.log(date7.toLocaleString());
console.log(date8.toLocaleString());

console.log(`--------------------------`);

//toLocaleTimeString() IMPORTANT FOR PROJECT

const date9 = new Date();
const date10 = new Date();

console.log(date9.toLocaleTimeString());
console.log(date10.toLocaleTimeString());

console.log(`--------------------------`);

//setDate()

const date11 = new Date();
const date12 = new Date();

console.log(date11.setDate(15));
console.log(date12.setDate(15));
console.log(date11.setDate(date.getDate() + 1));
console.log(date11);


console.log(`--------------------------`);
