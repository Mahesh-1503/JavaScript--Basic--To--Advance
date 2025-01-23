// The "for...of" loop in JavaScript is a modern iteration statement introduced in 
// ECMAScript 6 (ES6). It provides a concise and easy way to loop over elements in 
// iterable objects like arrays, strings, maps, sets, and more.

// This loop allows you to iterate directly over the values of the elements, rather 
// than dealing with their indices or keys, which makes the code more readable and 
// less error-prone


// for (variable of iterable) {
//     // code block to execute
//   }


  let people = ['Alluarjun', 'Rana', 'Rajinikanth', 'Mohanlal'];

  for (let person of people){
    console.log(person);
  }