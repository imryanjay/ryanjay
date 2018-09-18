import React from 'react';

class Skills extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const skillSet = this.props.skills.map((skill, i) =>
      <div className="skill" key={i}>
        <div className="skill__bar">
          <span className="skill__amount animate" style={{'width': skill.amount+'%' }}></span>
        </div>
        <h4>{skill.title}</h4>
      </div>
    );

    var animateHTML = function () {
      var elems, windowHeight
      var init = function () {
        elems = document.getElementsByClassName('animate')
        windowHeight = window.innerHeight
        _addEventHandlers()
      }
      var _addEventHandlers = function () {
        window.addEventListener('scroll', _checkPosition)
        window.addEventListener('resize', init)
      }
      var _checkPosition = function () {
        for (var i = 0; i < elems.length; i++) {
          var posFromTop = elems[i].getBoundingClientRect().top + 100
          if (posFromTop - windowHeight <= 0) {
            elems[i].className = elems[i].className.replace('animate', 'animated')
          }
        }
      }
      return {
        init: init
      }
    }
    animateHTML().init()


    return (
        <section className="section skills">
          <h2>{this.props.title}</h2>
          <div className="skills__content">
            {skillSet}
          </div>
        </section>
    );
  }
}

export default Skills;
