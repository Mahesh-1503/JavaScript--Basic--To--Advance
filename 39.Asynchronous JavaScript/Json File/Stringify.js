const names = [
  "Spongebob",
  "Patrick",
  "Squidward",
  "Sandy",
  "Mr. Krabs",
  "Plankton",
];
const person = {
  name: "Mahesh",
  age: 20,
  isEmployed: true,
  hobbies: ["reading", "traveling"],
};

const people = [
  {
    name: "Mahesh",
    age: 20,
    isEmployed: false,
  },
  {
    name: "Priya",
    age: 25,
    isEmployed: true,
  },
  {
    name: "Rajesh",
    age: 30,
    isEmployed: false,
  },
  {
    name: "Anita",
    age: 22,
    isEmployed: true,
  },
  {
    name: "Vikram",
    age: 28,
    isEmployed: true,
  },
  {
    name: "Sunita",
    age: 35,
    isEmployed: false,
  },
  {
    name: "Amit",
    age: 40,
    isEmployed: true,
  },
  {
    name: "Deepa",
    age: 27,
    isEmployed: false,
  },
  {
    name: "Rahul",
    age: 33,
    isEmployed: true,
  },
  {
    name: "Neha",
    age: 29,
    isEmployed: false,
  },
  {
    name: "Sanjay",
    age: 45,
    isEmployed: true,
  },
];

const jsonString = JSON.stringify(names);

console.log(jsonString);

const json = JSON.stringify(person);
console.log(json);

const jsonPeople = JSON.stringify(people);
console.log(jsonPeople);