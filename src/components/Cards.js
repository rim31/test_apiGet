import React from 'react';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey : 1,
      data : [],
      now : '',
      myHeros : [],
      };
  }
  componentDidMount() {
      console.log(this.state.myHeros)

  }
  render() {
    return (

      <div className="sectionHeros">
    		<div className="container">
                <img src="https://cdn.intra.42.fr/users/oseng.jpg" alt=''/>
                <p>Photo de super heros</p>
                <div>
                {
                  // this.state.myHeros.comics.items.map((dynamicData, key) =>
                  // <div key={key}>
                  //     {dynamicData.items}
                  // </div>)
                }
                </div>
    		</div>
    	</div>
    );
  }
}
