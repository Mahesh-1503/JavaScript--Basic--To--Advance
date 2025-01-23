//Refactor this code to ES6 arrow function

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Hey");
      setTimeout(() => {
        console.log("Namaste");
        setTimeout(() => {
          console.log("Good");
          setTimeout(() => {
            console.log("Bye");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
  