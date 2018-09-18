import React from 'react';

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section className="section contact">
          <h2>{this.props.title}</h2>
          <a className="contact__button" href={"mailto:" + this.props.email}>{this.props.buttonTitle}</a>
        </section>
    );
  }
}

export default Contact;
