import React from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
  return (
    <header className={`header-all ${(props.light) ? '' : 'dark'}`}>
      <div className={`header-container`}>
        <div className={`header-circle`}>
          <img className={`header-img`} src="/img/img/hangman.png" alt="Logo"/>
        </div>
        <Link to="/" className={`header-text`}><h1>{(props.lang === "en") ? 'Hangman game' : ''}{(props.lang === "fr") ? 'Jeu du pendu' : ''}</h1></Link>
      </div>
    </header>
  )
}