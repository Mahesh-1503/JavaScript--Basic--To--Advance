const car = {
  color: "red",
  type: "sedan",
  model: "BMW",
  year: 2020,
  isAutomatic: true,
};

console.log(car);
console.log(typeof car);

// accessing the properties of an <object data="" type=""></object>
console.log(car.color);
console.log(car["color"]);

// updating the properties of an object
car.color = "blue";
console.log(car.color);

// adding new properties to an object
car.price = 100000;
console.log(car);

// deleting the properties of an object
delete car.price;
console.log(car);

// accessing the properties of an object using a variable
const property = "color";
console.log(car[property]);

// accessing the properties of an object using a variable
const properties = ["color", "model", "year", "isAutomatic"];
for (let i = 0; i < properties.length; i++) {
  console.log(car[properties[i]]);
}

/**
 * 3:26:35(continue watching video from here) //JavaScript Functions
 */
