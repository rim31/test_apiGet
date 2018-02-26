import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <h1 className="App-title">Welcome Super Heros</h1>
        </header>
      </div>
    );
  }
}

export default Main;
