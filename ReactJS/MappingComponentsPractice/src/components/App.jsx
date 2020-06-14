import React from "react";

import emojipedia from "../emojipedia";
import Entry from "./Entry";

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
