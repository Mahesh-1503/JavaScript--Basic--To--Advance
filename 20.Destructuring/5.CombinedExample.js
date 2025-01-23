const user = {
    id: 101,
    info: { name: "Alice", age: 25 },
    hobbies: ["reading", "traveling"]
  };
  
  const {
    id,
    info: { name, age },
    hobbies: [firstHobby, secondHobby]
  } = user;
  
  console.log(id);         // Output: 101
  console.log(name);       // Output: "Alice"
  console.log(age);        // Output: 25
  console.log(firstHobby+", "+secondHobby); // Output: "reading"
  