import React from "react";

export default function Word({word, letterUsed, win, light}) {
  return (
    <div className={`word-all ${(light) ? '' : 'dark'}`}>
      {word.split('').map((letter, key) => {
        let status = "found";

        if(letterUsed.indexOf(letter) === -1) {
          status = "notFound"
        }
        return (
          <div className={`word-container ${(status === "found") ? 'valid' : 'invalid'}`} key={`word_${key}`}>
            <p className={`word-text`}>{status === "found" ? letter : ((win === -1) ? letter : "")}</p>
          </div>
        )
      })}
    </div>
  )
}