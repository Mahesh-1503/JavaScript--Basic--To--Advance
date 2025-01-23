const user = {
    name: "Bob"
  };
  
  const { address: { city = "Unknown", country = "Unknown" } = {} } = user;
  
  console.log(city);    // Output: Unknown
  console.log(country); // Output: Unknown
  