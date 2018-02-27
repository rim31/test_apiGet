import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import Main from './components/Main.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey : '',
      data : [],
      now : '',
      allCharacters : [],
      myHeros : '',
      //not sure it's safe ?
      API_PUBLIC: '298bab46381a6daaaee19aa5c8cafea5',
      API_PRIVATE: 'b0223681fced28de0fe97e6b9cd091dd36a5b71d',
    };
  }

  //function click on image of super heros then display detail
  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey})
    window.location = '/cards/'+selectedKey;
  }

  // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    const self = this;
    self.interval = setInterval(function() {
      self.setState({
        now: new Date(),
      });
    }, 1000);

     var myTimestamp = new Date().getTime()
     var myData = myTimestamp+this.state.API_PRIVATE+this.state.API_PUBLIC
     var crypto = require('crypto');
     var myHash = crypto.createHash('md5').update(myData).digest("hex");
     var url = 'http://gateway.marvel.com/v1/public/characters?apikey='+this.state.API_PUBLIC+'&ts='+myTimestamp+'&hash='+myHash;

     fetch(url)
     .then((Response)=>Response.json())
     .then((myResponse) => {
       this.setState({
         data:myResponse.data.results
       })
     });
  }

  render() {
    return (
      <div className="App">
      <Main />
        <Grid allCharacters={this.state.allCharacters}/>
        <div className="flex-container">
          {
            this.state.data.map((dynamicData, key) =>
            <div className="herosCard" key={key} id={dynamicData.id} onClick={() => {this.handleSelect(dynamicData.id)}}>
                <img className="imageGrid" src={dynamicData.thumbnail.path + '.' + dynamicData.thumbnail.extension} alt=''/>
                <div>
                  <p>{dynamicData.name}</p>
                </div>
            </div>)
          }
        </div>
    </div>
    );
  }
}

export default App;
