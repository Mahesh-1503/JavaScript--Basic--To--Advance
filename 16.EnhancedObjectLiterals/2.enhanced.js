function user(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro:() => {
      console.log(`My name is ${name} & I am ${age} years old.`);
    },
  };
}

const user1 = user("Mahesh", 20, "Programmer");

const user2 = user("Kumar", 23, "Developer");

console.log(user1.intro());
console.log(`-----------------------------------------------`);

console.log(user2.intro());
console.log(`-----------------------------------------------`);

console.log(user1);
console.log(`-----------------------------------------------`);

console.log(user2);