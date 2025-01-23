//Mixed Object and Array Destructuring


const user = {
    name: "Charlie",
    hobbies: ["reading", "cycling", "traveling"],
    address: {
      city: "Los Angeles",
      coordinates: [34.0522, -118.2437]
    }
  };
  
  const {
    name,
    hobbies: [firstHobby],
    address: { city, coordinates: [lat, lng] }
  } = user;
  
  console.log(`name: ${name}`);        // Output: Charlie
  console.log(firstHobby);  // Output: reading
  console.log(city);        // Output: Los Angeles
  console.log(lat);         // Output: 34.0522
  console.log(lng);         // Output: -118.2437
  