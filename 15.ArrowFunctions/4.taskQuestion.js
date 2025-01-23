//Refactor this code to ES6 arrow function

setTimeout(function () {
  console.log("Hello, World!");
  setTimeout(function () {
    console.log("Hello, World!");
    setTimeout(function () {
      console.log("Hello, World!");
      setTimeout(function () {
        console.log("Hello, World!");
        setTimeout(function () {
          console.log("Hello, World!");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
