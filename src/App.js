import React, { Component } from 'react';
import './App.css';
// import Grid from './components/Grid.js';
// import ApiGet from './components/ApiGet.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    }
  }
  // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((Response)=>Response.json())
    .then((myResponse) => {
      console.log(myResponse)
      this.setState({
        data:myResponse.movies
      })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Super Heros</h1>
        </header>
        <p className="App-intro"> Hello BG</p>
        <div>
          {
            this.state.data.map((dynamicData, key) => 
            <div key={key}>
                {dynamicData.title}
            </div>)
          }
          {/*<Grid />
          <ApiGet />*/}
        </div>
      </div>
    );
  }
}

export default App;
