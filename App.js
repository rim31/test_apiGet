import React, { Component } from 'react';
import './App.css';
// import Grid from './components/Grid.js';
// import ApiGet from './components/ApiGet.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      now:'',
      API_PUBLIC: '298bab46381a6daaaee19aa5c8cafea5',
      API_PRIVATE: 'b0223681fced28de0fe97e6b9cd091dd36a5b71d',
    }
  }
  myButton() {
    console.log('coucou')
    const self = this;
    self.interval = setInterval(function() {
      self.setState({
        now: new Date(),
      });
    }, 1000);
     console.log(this.state.now)
     var myTimestamp = new Date().getTime()
     console.log(myTimestamp)
     console.log(myTimestamp+this.state.API_PRIVATE+this.state.API_PUBLIC)
     var myData = myTimestamp+this.state.API_PRIVATE+this.state.API_PUBLIC
     var crypto = require('crypto');
     var myHash = crypto.createHash('md5').update(myData).digest("hex");
     console.log(myHash)
    //  http://gateway.marvel.com/v1/public/comics?apikey=298bab46381a6daaaee19aa5c8cafea5&ts=1519494160&hash=321
    // http://gateway.marvel.com/v1/public/comics?apikey=298bab46381a6daaaee19aa5c8cafea5&ts=1519495930639&hash=587d365a1ab2169a5b5034160f54811c
  
  //http://gateway.marvel.com/v1/public/characters?apikey=298bab46381a6daaaee19aa5c8cafea5&ts=1519495930639&hash=587d365a1ab2169a5b5034160f54811c
  
//http://gateway.marvel.com/v1/public/characters/1011334?apikey=298bab46381a6daaaee19aa5c8cafea5&ts=1519495930639&hash=587d365a1ab2169a5b5034160f54811c
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
        <button  onClick={() => {this.myButton()}}>
            Hash
        </button>
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
