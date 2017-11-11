import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.handle = undefined;
    // CAN ALSO SET THIS WITH BIND
    // this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState( { time: new Date() } );
  }

  componentDidMount() {
    this.handle = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }

  render(){
    return(
      <div>
        <h1>Time: { this.state.time.toTimeString() }</h1>
        <h1>Date: { this.state.time.toDateString() }</h1>
      </div>


    );
  }
}

export default Clock;
