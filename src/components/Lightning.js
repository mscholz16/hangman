import React from "react";

export default function Lightning(props) {
  return (
      <div className={`lightning-container`} onClick={props.action}>
        <p className={`lightning-text`}>{(props.lang === "fr") ? ((props.light) ? 'Clair' : 'Sombre') : ''}{(props.lang === "en") ? ((props.light) ? 'Light' : 'Dark') : ''}</p>
      </div>
    )
}