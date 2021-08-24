import React from "react";

export default function Start(props) {
  return (
    <div onClick={props.action} className={`start-all ${(props.light) ? '' : 'dark'}`}>
      <div className={`start-container`}>
        <p className={`start-text`}>{(props.win === 0) ? ((props.lang === "en") ? 'Ready' : ((props.lang === "fr") ? 'Prêt' : '')) : ((props.lang === "en") ? 'Again' : ((props.lang === "fr") ? 'Encore' : ''))} ?</p>
      </div>
    </div>
  )
}