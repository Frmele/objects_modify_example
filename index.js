'use strict';

const person = {
  name: "Piet",
  lastName: "de Meer",
  age: 20,
  adult: true,
  allergies: ["peanuts", "gluten"]
}

// Accessing the value of a property
console.log(person.name);
// using the bracket notation
console.log(person["name"]);

// Adding a property
person.canCode = true;
console.log(person);

// Changing a property
person.age = 21;
console.log(person);

// Deleting a property
// You almost never do this
delete person.age;
console.log(person);