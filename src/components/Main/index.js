import React from 'react';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="main">
          <h1>{this.props.title}</h1>
          <h3><span>{this.props.caption}</span></h3>
          <div className="arrows">
            <span className="arrow one"></span>
            <span className="arrow two"></span>
          </div>
        </div>
    );
  }
}

export default Main;
