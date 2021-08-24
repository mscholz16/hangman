import React, {Component} from "react";

class Draw extends Component {

  state = {
    attempt: this.props.attempt,
    light: this.props.light
  }

  render() {
    return (
      <div className={`draw-container ${(this.props.light) ? '' : 'dark'}`}>
        <span className={`draw-one ${(this.props.attempt >= 1) ? 'visible' : 'hide'}`}/>
        <span className={`draw-two ${(this.props.attempt >= 2) ? 'visible' : 'hide'}`}/>
        <span className={`draw-three ${(this.props.attempt >= 3) ? 'visible' : 'hide'}`}/>
        <span className={`draw-four ${(this.props.attempt >= 7) ? 'visible' : 'hide'}`}/>
        <span className={`draw-five white ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-six ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-seven rotate ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-eight rotate ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-nine rotate ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-ten rotate ${(this.props.attempt >= 6) ? 'visible' : 'hide'}`}/>
        <span className={`draw-eleven rotate ${(this.props.attempt >= 4) ? 'visible' : 'hide'}`}/>
        <span className={`draw-twelve rotate ${(this.props.attempt >= 4) ? 'visible' : 'hide'}`}/>
        <span className={`draw-thirteen rotate ${(this.props.attempt >= 4) ? 'visible' : 'hide'}`}/>
        <span className={`draw-fourteen ${(this.props.attempt >= 5 && this.props.attempt < 7) ? 'visible' : 'hide'}`}/>
        <span className={`draw-fifteen ${(this.props.attempt >= 6) ? ((this.props.attempt >= 7) ? 'dead' : 'visible') : 'hide'}`}/>
        <span className={`draw-sixteen ${(this.props.attempt >= 6) ? ((this.props.attempt >= 7) ? 'dead' : 'visible') : 'hide'}`}/>
        <span className={`draw-eighteen ${(this.props.attempt >= 6) ? ((this.props.attempt >= 7) ? 'dead' : 'visible') : 'hide'}`}/>
        <span className={`draw-nineteen ${(this.props.attempt >= 6) ? ((this.props.attempt >= 7) ? 'dead' : 'visible') : 'hide'}`}/>
      </div>
    )
  }
}

export default Draw;