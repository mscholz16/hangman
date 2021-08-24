import React from "react";

export default function Language(props) {
  return (
    <div className={`lang-container`} onClick={props.action}>
      <p className={`lang-text ${(props.lang === "en") ? 'active' : ''}`}>English</p>
      <p className={`lang-text ${(props.lang === "fr") ? 'active' : ''}`}>Français</p>
    </div>
  )
}