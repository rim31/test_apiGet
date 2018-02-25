import React from 'react';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey : 1,
      data : [],
      now : '',
      allCharacters : [],
      API_PUBLIC: '298bab46381a6daaaee19aa5c8cafea5',
      API_PRIVATE: 'b0223681fced28de0fe97e6b9cd091dd36a5b71d',
    };
  }
  componentDidMount() {
      console.log(this.state.allCharacters)
  }
  render() {
    return (

      <div className="sectionHeros">
    		<div className="container">
                <img src="https://cdn.intra.42.fr/users/medium_norminet.jpg"/>
                <p>Photo du super heros</p>
                <div>
                {
                  this.state.allCharacters.map((dynamicData, key) =>
                  <div key={key}>
                      {dynamicData.id}
                  </div>)
                }
                </div>
    		</div>
        {/*<div className="flex-container">
        {
          this.state.allCharacters.map((dynamicData, key) =>
          <div key={key} id={dynamicData.id} onClick={() => {this.handleSelect(dynamicData.id)}}>
              <img className="imageGrid" src={dynamicData.thumbnail.path + '.' + dynamicData.thumbnail.extension}/>
              <div>
                <span>{dynamicData.name}</span>
              </div>
          </div>)
        }
      </div>*/}
    	</div>
    );
  }
}
