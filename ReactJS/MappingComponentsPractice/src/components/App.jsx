import React from "react";

import emojipedia from "../emojipedia";
import Entry from "./Entry";

const newEmojipedia = emojipedia.map((emojiEntry) => {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

function createList(emoji) {
  return (
    <Entry
      key={emoji.id}
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createList)}</dl>
    </div>
  );
}

export default App;
