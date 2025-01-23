/**
 * every() and some()
 * - every() is used to check if all elements in an array pass a certain condition.
 * - some() is used to check if at least one element in an array passes a certain condition.
 * - both methods return a boolean value.
 */


const peoples = [
    'mahesh',
    'kumar',
    'pothu',
    'Arun',//length is 4
]

const res1 = peoples.every((people) => people.length === 4);
console.log(res1);//false because all elements in the array do not have a length of 4

const res2 = peoples.some((people) => people.length === 4);
console.log(res2);//true because at least one element in the array has a length of 4.