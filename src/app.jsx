require('./scss/app.scss');
import React from 'react';
import jsonData from 'data.json';
import {Main, Bio, Skills, WorkEducation, Contact} from './components';

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
      },
      work: jsonData.work,
      education: jsonData.education,
      contact: {
        title: jsonData.contact.title,
        email: jsonData.contact.email,
        buttonTitle: jsonData.contact.buttonTitle
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
        <WorkEducation work={this.state.work} education={this.state.education} />
      </div>
      <div className="bottom_angle"></div>
      <div className="angled_spacer"></div>
      <div className="top_angle"></div>
      <div className="content">
        <Contact title={this.state.contact.title} email={this.state.contact.email} buttonTitle={this.state.contact.buttonTitle}/>
      </div>
      <div className="footer">made by ryan jay</div>
    </div>);
  }
}

export default App;
