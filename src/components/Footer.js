import React from "react";

export default function Footer(props) {
  return (
    <footer className={`footer-all ${(props.light) ? '' : 'dark'}`}>
      <div className={`footer-container`}>
        <p className={`footer-text`}>{(props.lang === "en") ? 'By' : ''}{(props.lang === "fr") ? 'Par' : ''} mscholz</p>
      </div>
    </footer>
  )
}