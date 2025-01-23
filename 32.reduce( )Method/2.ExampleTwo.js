const peoples = [
    {
        name: 'John',
        age: 30,
    },
    {
        name: 'Jane',
        age: 25,
    },
    {
        name: 'Bob',
        age: 35,
    },
    {
        name: 'Alice',
        age: 28,
    },
    {
        name: 'Charlie',
        age: 32,
    },
]

const oldestAge = peoples.reduce((p,c) => {
    return p.age > c.age ? p : c;
},0);
console.log(oldestAge);

const youngestAge = peoples.reduce((p,c) => {
    return p.age < c.age ? p : c;
},0);
console.log(youngestAge);

const totalAge = peoples.reduce((p,c) => {
    return p + c.age;
},0);
console.log(totalAge);