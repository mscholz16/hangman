import React from "react";

export default function Quote(props) {
  return (
    <div className={`quote-container ${(props.light) ? '' : 'dark'}`}>
      <q className={`quote-text`}>" {(props.lang === "en") ? 'Hangman is great. It teaches you that just by saying the wrong things you can end someone\'s life.' : ''}{(props.lang === "fr") ? 'Le pendu est génial. Cela vous apprend qu\'en disant les mauvaises choses, vous pouvez mettre fin à la vie de quelqu\'un.' : ''} "</q>
    </div>
  )
}