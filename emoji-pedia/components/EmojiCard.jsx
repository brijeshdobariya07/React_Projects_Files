import React from 'react';
// import Emoji from './Emoji.jsx';

function EmojiCard(props){
    return <div className="term">
    <dt>
      {/* <Emoji 
          emoji={props.emojiIcon}
      /> */}
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emojiIcon}
  </span>
      <span>{props.name}</span>
    </dt>
    <dd>
      {props.meaning}
    </dd>
  </div>
}

export default EmojiCard;