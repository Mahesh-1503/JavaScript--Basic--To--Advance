//Destructuring in Function Parameters

function displayUser({ name, address: { city, country } }) {
    console.log(`Name: ${name}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
  }
  
  const user = {
    name: "David",
    address: {
      city: "San Francisco",
      country: "USA"
    }
  };
  
  displayUser(user);
  // Output:
  // Name: David
  // City: San Francisco
  // Country: USA
  