function person(firstName, lastName, ...hobbies) {
    console.log('firstName: ',firstName);
    console.log('lastName: ',lastName);
    console.log('hobbies: ',hobbies);
}

person('Mahesh', 'Kumar', 'Coding', 'Reading'); // firstName:  Mahesh, lastName:  Kumar, hobbies:  [ 'Coding', 'Reading' ]
console.log(`--------------------------`);

person('Mahesh', 'Kumar'); // firstName:  Mahesh, lastName:  Kumar, hobbies:  []
console.log(`--------------------------`);

person('Mahesh'); // firstName:  Mahesh, lastName:  undefined, hobbies:  []
console.log(`--------------------------`);

person(); // firstName:  undefined, lastName:  undefined, hobbies:  []
// If we don't pass any argument then it will be undefined