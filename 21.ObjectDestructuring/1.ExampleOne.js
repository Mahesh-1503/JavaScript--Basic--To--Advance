/**
 * IN OBJECT DESTRUCTURING ORDER DOES NOT MATTER BUT THE NAME MUST MATCH
 */

const student = {
    name: "Rahul",
    position:"First",
    rollNo: 27,
};

const {name, rollNo, position} = student;
console.log(name);//Rahul
console.log(rollNo);//27
console.log(position);//First

// console.log(`--------------------------`);
// console.log(student);