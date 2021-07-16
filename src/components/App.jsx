import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* MAPPING ARRAY BY USING MAP - USE FUNCTION STRUCTURES */}
        {emojipedia.map(emojiTerm => (
          <Entry key={emojiTerm.id} emoji={emojiTerm.emoji} name={emojiTerm.name} meaning={emojiTerm.meaning.substring(0, 100)}/>
        )}
      </dl>
    </div>
  );
}

export default App;
