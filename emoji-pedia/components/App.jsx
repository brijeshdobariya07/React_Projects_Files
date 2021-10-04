import React from "react";
import emojipedia from '../emojipedia.js';
import EmojiCard from './EmojiCard.jsx';


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiPara)=>
          (<EmojiCard 
            key={emojiPara.id}
            emojiIcon={emojiPara.emoji}
            name={emojiPara.name}
            meaning={emojiPara.meaning}
          />)
        )}
      </dl>
    </div>
  );
}

export default App;
