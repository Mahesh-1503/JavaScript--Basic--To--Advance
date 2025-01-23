const user = {
    name: "Alice",
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  const { name, address: { city, country } } = user;
  
  console.log(name);    // Output: Alice
  console.log(city);    // Output: New York
  console.log(country); // Output: USA
  