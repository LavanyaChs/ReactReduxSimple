import React from 'react';

export default class Clock extends React.Component {
  componentDidMount() {
    this.isToggleOn = true;
    this.startTime();
  }

  componentWillUnmount() {
    this.handleClick = null;
    this.isToggleOn = null;
    this.stopTime();
  }

  startTime() {
    this.timerID = setInterval(() => this.forceUpdate(), 1000);
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  handleClick() {
    this.isToggleOn = !this.isToggleOn;
    this.isToggleOn !== false ? this.startTime() : this.stopTime();
    this.forceUpdate();
  }

  writeBtnTxt() {
    return this.isToggleOn !== false ? 'Stop' : 'Start';
  }

  render() {
    return (
      <div className="time">
        <h3>Now the time is {new Date().toLocaleTimeString()}.</h3>
        <button onClick={this.handleClick.bind(this)}>
          {this.writeBtnTxt()}
        </button>
      </div>
    );
  }
}

