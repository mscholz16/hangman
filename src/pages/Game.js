import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Letters from "../components/Letters";
import Draw from "../components/Draw";
import Word from "../components/Word";
import Quote from "../components/Quote";
import Start from "../components/Start";
import ListFr from "../utils/list-fr.txt";
import ListEn from "../utils/list-en.txt";
import Language from "../components/Language";
import Lightning from "../components/Lightning";

class Game extends Component {

  state = {
    wordCollection: null,
    wordCurrent: null,
    alphabet: "abcdefghijklmnopqrstuvwxyz".toLowerCase().split(''),
    letterUsed: [],
    win: 0,
    attempt: 0,
    lang: "en",
    light: true
  }

  componentDidMount() {
    window.addEventListener("keydown",(e) => {
      if(e.key === 'Enter') {
        this.startGame();
      }
    })

    this.fetchWord();
  }

  startGame = () => {
    this.setState({
      wordCurrent: this.searchNewWord(),
      letterUsed: [],
      win: 0,
      attempt: 0
    })

    this.fetchWord();
  }

  fetchWord = () => {
    if(this.state.lang === "en") {
      fetch(ListEn)
        .then(r => r.text())
        .then(text => {
          this.setState({wordCollection: text.split('\n')});
        });
    }

    if(this.state.lang === "fr") {
      fetch(ListFr)
        .then(r => r.text())
        .then(text => {
          this.setState({wordCollection: text.split('\n')});
        });
    }
  }

  toggleLang = () => {
    const html = document.querySelector("html");

    if(this.state.lang === "en") {
      this.setState({lang: "fr"});
      html.setAttribute("lang", "fr");
    }

    if(this.state.lang === "fr") {
      this.setState({lang: "en"});
      html.setAttribute("lang", "en");
    }
  }

  toggleLightning = () => {
    const body = document.querySelector("body");

    if(this.state.light === true) {
      this.setState({light: false});
      body.classList.add("dark");
    }

    if(this.state.light === false) {
      this.setState({light: true});
      body.classList.remove("dark");
    }
  }

  letterClick = (letter) => {
    console.log(letter);

    if(this.state.letterUsed.indexOf(letter) === -1) {
      let attempt = this.state.attempt;
      const letterUsed = [letter, ...this.state.letterUsed];

      if(this.state.wordCurrent.indexOf(letter) === -1) {
        attempt = this.state.attempt + 1;
      }

      let win = 1;

      for(let i = 0; i < this.state.wordCurrent.length; i++) {
        if(letterUsed.indexOf(this.state.wordCurrent[i]) === -1) {
          win = 0;
        }
      }

      if(attempt >= 7 && win === 0) {
        win = -1;
      }
      
      this.setState({letterUsed, attempt, win})
    }
  }

  searchNewWord = () => {
    const randomIndex = Math.floor(Math.random() * this.state.wordCollection.length);
    return this.state.wordCollection[randomIndex];
  }

  render() {
    return (
      <main className={`body-container ${(this.state.light) ? '' : 'dark'}`}>
        <Header lang={this.state.lang} light={this.state.light}/>
        <div className={`param ${(this.state.light) ? '' : 'dark'}`}>
          <Lightning action={() => this.toggleLightning()} lang={this.state.lang} light={this.state.light}/>
          <Language action={() => this.toggleLang()} lang={this.state.lang}/>
        </div>
        {(this.state.wordCurrent === null || this.state.win !== 0) && <Start win={this.state.win} action={() => this.startGame()} lang={this.state.lang} light={this.state.light}/>}
        {(this.state.win !== 0) && <Quote win={this.state.win} lang={this.state.lang} light={this.state.light}/>}
        <Draw attempt={this.state.attempt} light={this.state.light}/>
        {(this.state.wordCurrent !== null) && <Word word={this.state.wordCurrent} letterUsed={this.state.letterUsed} win={this.state.win} light={this.state.light}/>}
        {(this.state.wordCurrent !== null) && (this.state.win === 0) && <Letters alphabet={this.state.alphabet} action={this.letterClick} letterUsed={this.state.letterUsed} word={this.state.wordCurrent} attempt={this.state.attempt} light={this.state.light}/>}
        <Footer lang={this.state.lang} light={this.state.light}/>
      </main>
    )
  }
}

export default Game;