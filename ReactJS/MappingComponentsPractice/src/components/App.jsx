import React from "react";

import emojipedia from "../emojipedia";
import Entry from "./Entry";

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x);

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map( x => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
//const newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num => num > 10);

//const newEmojipedia = emojipedia.map((emojiEntry) => {
//  return emojiEntry.meaning.substring(0, 100);
//});

//console.log(newEmojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Entry
            key={emoji.id}
            id={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
