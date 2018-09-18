import React from 'react';

class Bio extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url("+this.props.image+")"
    }
    return (
        <section className="section bio">
          <h2>{this.props.title}</h2>
          <div className="bio__content">
            <div className="bio__text">
              <h4>
                <span dangerouslySetInnerHTML={ {__html: this.props.text} }></span>
              </h4>
            </div>
            <div className="bio__image" style={backgroundImage}></div>
          </div>
        </section>
    );
  }
}

export default Bio;
