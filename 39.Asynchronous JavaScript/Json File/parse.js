const jsonNames = `
    ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr. Krabs", "Plankton"]`;
    
const jsonPerson = `{"name": "Mahesh", "age": 20, "isEmployed": true, "hobbies": ["reading", "traveling"]}`;

const jsonPeople = `[
    {"name": "Mahesh", "age": 20, "isEmployed": false},
    {"name": "Priya", "age": 25, "isEmployed": true},
    {"name": "Rajesh", "age": 30, "isEmployed": false}]`;


   const parsedData = JSON.parse(jsonPeople); 
   console.log(parsedData); // [ { name: 'Mahesh', age: 20, isEmployed: false }, { name: 'Priya', age: 25, isEmployed: true }, { name: 'Rajesh', age: 30, isEmployed: false } ]

   console.log(parsedData[0].name); // Mahesh
   console.log(parsedData[0].age); // 20