const person = {
    firstName: 'Mahesh',
    lastName: 'Kumar',
    age: 20,
    location: ['planet', 'earth'],
    isProgrammer: true,

};
//adding item/element to object
person.gender = 'male';

console.log(person);
console.log(person.age);//accessing items from object
console.log(person['firstName']);//another way to access items from object
console.log(typeof person);
console.log(person.location[1]);

//deleting element from object
delete person.age;
console.log(person);

//boject contains  key and value