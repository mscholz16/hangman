import React, {Component} from "react";

class Letters extends Component {

  componentDidMount() {
    window.addEventListener("keydown",(e) => {
      if(this.props.alphabet.indexOf(e.key) !== -1) {
        this.props.action(e.key)
      }
    })
  }

  render() {
    return (
      <div className={`letter-all ${(this.props.light) ? '' : 'dark'}`}>
        {this.props.alphabet.map((letter, key) => {
          const word = this.props.word.split('').indexOf(letter);
          return (
            <div className={`letter-container ${((this.props.letterUsed.indexOf(letter) !== -1) && (word !== -1)) ? "valid" : ""} ${((this.props.letterUsed.indexOf(letter) !== -1) && (word === -1)) ? "invalid" : ""} `} key={`letter_${key}`} onClick={() => this.props.action(letter)}>
              <p className={`letter-text`}>{letter}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Letters;