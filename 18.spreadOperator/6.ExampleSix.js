let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const clone = {...person, work: 'Developer'};
console.log(clone);