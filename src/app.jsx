require('./scss/app.scss');
import React from 'react';
import jsonData from 'data.json';
import {Main, Bio, Skills} from './components';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      intro: {
        title: jsonData.intro.title,
        caption: jsonData.intro.caption
      },
      bio: {
        title: jsonData.bio.title,
        text: jsonData.bio.text,
        image: jsonData.bio.image
      },
      skills: {
        title: jsonData.skills.title,
        skills: jsonData.skills.skills
      }
    }
  }

  render() {
    return (<div className="wrapper">
      <Main title={this.state.intro.title} caption={this.state.intro.caption}/>
      <div className="top_angle"></div>
      <div className="content">
        <Bio title={this.state.bio.title} text={this.state.bio.text} image={this.state.bio.image}/>
        <div className="breaker"></div>
        <Skills title={this.state.skills.title} skills={this.state.skills.skills}/>
        <div className="breaker"></div>
      </div>
    </div>);
  }
}

export default App;
