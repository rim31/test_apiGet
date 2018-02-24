import React, { Component } from 'react';
import './App.css';
// import Grid from './components/Grid.js';
// import ApiGet from './components/ApiGet.js';

// movies : Array(5)
// 0 : {title: "Star Wars", releaseYear: "1977"}
// 1 : {title: "Back to the Future", releaseYear: "1985"}
// 2 : {title: "The Matrix", releaseYear: "1999"}
// 3 : {title: "Inception", releaseYear: "2010"}
// 4 : {title: "Interstellar", releaseYear: "2014"}

class ApiGet extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
    }
  }
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((Response)=>Response.json())
    .then((findresponse) => {
      console.log(findresponse)
      this.setState({
        data:findresponse.movies,
      })
    });
  }
  render() {
    return (
      <div className="ApiGet">
        <header className="ApiGet-header">
          <h1 className="App-title">Welcome Super Heros 1</h1>

        <p className="App-intro"> Hello BG{this.state.data}</p>
        <div>
          {
            this.state.data.map((dynamicData, key) => 
            <div>
                {dynamicData.title}
            </div>
            <div>
                {key}
            </div>)
          }
          {/*<Grid />
          <ApiGet />*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}

        </div>
        </header>
      </div>
    );
  }
}

export default ApiGet;
