import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  chip: {
    margin: 4,
    width:'auto',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey : '',
      data : [],
      now : '',
      myHeros : [],
      API_PUBLIC: '298bab46381a6daaaee19aa5c8cafea5',
      API_PRIVATE: 'b0223681fced28de0fe97e6b9cd091dd36a5b71d',
      myJson: [
        {"id":1011334,"name":"3-D Man","description":"","modified":"2014-04-29T14:18:17-0400","thumbnail":{"path":"https://cdn.intra.42.fr/users/oseng","extension":"jpg"},"resourceURI":"http://gateway.marvel.com/v1/public/characters/1011334","comics":{"available":12,"collectionURI":"http://gateway.marvel.com/v1/public/characters/1011334/comics","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/comics/21366","name":"Avengers: The Initiative (2007) #14"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/24571","name":"Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/21546","name":"Avengers: The Initiative (2007) #15"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/21741","name":"Avengers: The Initiative (2007) #16"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/21975","name":"Avengers: The Initiative (2007) #17"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/22299","name":"Avengers: The Initiative (2007) #18"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/22300","name":"Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/22506","name":"Avengers: The Initiative (2007) #19"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/8500","name":"Deadpool (1997) #44"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/10223","name":"Marvel Premiere (1972) #35"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/10224","name":"Marvel Premiere (1972) #36"},{"resourceURI":"http://gateway.marvel.com/v1/public/comics/10225","name":"Marvel Premiere (1972) #37"}],"returned":12},"series":{"available":3,"collectionURI":"http://gateway.marvel.com/v1/public/characters/1011334/series","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/series/1945","name":"Avengers: The Initiative (2007 - 2010)"},{"resourceURI":"http://gateway.marvel.com/v1/public/series/2005","name":"Deadpool (1997 - 2002)"},{"resourceURI":"http://gateway.marvel.com/v1/public/series/2045","name":"Marvel Premiere (1972 - 1981)"}],"returned":3},"stories":{"available":21,"collectionURI":"http://gateway.marvel.com/v1/public/characters/1011334/stories","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19947","name":"Cover #19947","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19948","name":"The 3-D Man!","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19949","name":"Cover #19949","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19950","name":"The Devil's Music!","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19951","name":"Cover #19951","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/19952","name":"Code-Name:  The Cold Warrior!","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47184","name":"AVENGERS: THE INITIATIVE (2007) #14","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47185","name":"Avengers: The Initiative (2007) #14 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47498","name":"AVENGERS: THE INITIATIVE (2007) #15","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47499","name":"Avengers: The Initiative (2007) #15 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47792","name":"AVENGERS: THE INITIATIVE (2007) #16","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/47793","name":"Avengers: The Initiative (2007) #16 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/48361","name":"AVENGERS: THE INITIATIVE (2007) #17","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/48362","name":"Avengers: The Initiative (2007) #17 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/49103","name":"AVENGERS: THE INITIATIVE (2007) #18","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/49104","name":"Avengers: The Initiative (2007) #18 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/49106","name":"Avengers: The Initiative (2007) #18, Zombie Variant - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/49888","name":"AVENGERS: THE INITIATIVE (2007) #19","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/49889","name":"Avengers: The Initiative (2007) #19 - Int","type":"interiorStory"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/54371","name":"Avengers: The Initiative (2007) #14, Spotlight Variant - Int","type":"interiorStory"}],"returned":20},"events":{"available":1,"collectionURI":"http://gateway.marvel.com/v1/public/characters/1011334/events","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/events/269","name":"Secret Invasion"}],"returned":1},"urls":[{"type":"detail","url":"http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"},{"type":"wiki","url":"http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"},{"type":"comiclink","url":"http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=298bab46381a6daaaee19aa5c8cafea5"}]}
      ],
      };
  }
  componentDidMount() {
      var currLocation = window.location.href;
      console.log(currLocation);
      if (currLocation !== 'http://localhost:3000/cards')
        {
        var pagenum = currLocation.match(/\/cards\/(.*)/)[1];
        console.log(pagenum);

        const self = this;
        self.interval = setInterval(function() {
          self.setState({
            now: new Date(),
          });
        }, 1000);
         console.log(this.state.now)
         var myTimestamp = new Date().getTime()
         var myData = myTimestamp+this.state.API_PRIVATE+this.state.API_PUBLIC
         var crypto = require('crypto');
         var myHash = crypto.createHash('md5').update(myData).digest("hex");
         var url = 'http://gateway.marvel.com/v1/public/characters/'+pagenum+'?apikey='+this.state.API_PUBLIC+'&ts='+myTimestamp+'&hash='+myHash;
         fetch(url)
         .then((Response)=>Response.json())
         .then((myResponse) => {
           this.setState({
             // myHeros:myResponse.data.results,
             myJson:myResponse.data.results
           })
         });
       }
       // console.log('state myHeros : '+this.state.myHeros.id+this.state.myJson[0].id)

  }
  render() {
    return (

    <MuiThemeProvider>

      <div className="sectionHeros">
    		<div className="container">
          <div>
            <a href="/">Home</a>
          </div>
            <Card>
               <CardHeader
                 title="Ze Super Heros"
                 subtitle="os"
                 avatar="https://cdn.intra.42.fr/users/oseng.jpg"
               />
               <CardMedia
                 overlay={<CardTitle title={this.state.myJson[0].name} subtitle={this.state.myJson[0].id} />}
               >
                 <img src={this.state.myJson[0].thumbnail.path + '.' + this.state.myJson[0].thumbnail.extension} alt="" />
               </CardMedia>
               <CardTitle title={this.state.myJson[0].name} subtitle={this.state.myJson[0].id} />
               <CardText>
                  {this.state.myJson[0].description}
                  <h2>comics</h2>
                  <List>
                    { this.state.myJson[0].comics.items.map((dynamicData, key) =>
                      <ListItem key={key} primaryText={dynamicData.name}/>
                    )}
                  </List>
                   <h2>series</h2>
                   <List>
                     { this.state.myJson[0].series.items.map((dynamicData, key) =>
                       <ListItem key={key} primaryText={dynamicData.name}/>
                     )}
                   </List>

               </CardText>
               <CardActions>
               { this.state.myJson[0].urls.map((dynamicData, key) =>
                 <Chip key={key} style={styles.chip} >{dynamicData.url}</Chip>
               )}
               </CardActions>
             </Card>




        </div>
    	</div>

  </MuiThemeProvider>

    );
  }
}
