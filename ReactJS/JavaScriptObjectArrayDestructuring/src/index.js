// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import animals, { useAnimals } from "./data";

// Destructuring Arrays
// console.log(animals);
const [cat, dog] = animals;
// console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// Destructuring Objects
// const { name, sound } = cat;
// console.log(sound);
// const { name: catName, sound: catSound } = cat;
// console.log(catName);

// Setting Default Values
// const { name = "Fluffy", sound = "Fuzz" } = cat;
// console.log(name);

// Destructuring with Nested Objects
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
