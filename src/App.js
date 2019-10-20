import React, { Component } from 'react';
import Slider from "react-slick";

const style = {
  body: {
    position: 'relative',
    maxWidth: 1010,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '30vh',
    paddingBottom: '30vh',
  },
  header: {
    // marginBottom: 240,
  },
  logo: {
    height: 'auto',
    maxWidth: 630,
    width: '90%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  caption: {
    marginTop: 40,
    textAlign: 'center',
    letterSpacing: 4,
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
  },
  content: {
    position: 'relative',
  },
  portfolio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    width: '100%',
    marginTop: '30vh',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Avenir-Medium',
    marginBottom: 20,
    letterSpacing: 4,
    borderBottom: '1px solid #DFDFDF',
    paddingBottom: 20,
  },
  item: {
    position: 'relative',
    maxWidth: 600,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  itemLarge: {
    maxWidth: 1015,
  },
  phones: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 120,
  },
  phone: {
    position: 'relative',
    width: '30%',
  },
  slider: {
    position: 'relative',
    zIndex: 1,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    display: 'block',
    zIndex: 1,
  },
  shadow: {
    position: 'absolute',
    left: '10%',
    bottom: 8,
    width: '80%',
    height: 170,
    boxShadow: '0 40px 45px 0 rgba(0,0,0,0.20)'
  },
  description: {
    marginTop: 60,
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    letterSpacing: 1,
    lineHeight: 1.7,
    fontSize: 14,
    textAlign: 'center',
  },
  skillWrapper: {
    position: 'relative',
    maxWidth: 700,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  skillContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  skill: {
    width: '46%',
    marginBottom: 10,
  },
  skillBar: {
    height: 12,
    width: '100%',
    backgroundColor: '#DFDFDF',
    overflow: 'hidden',
  },
  skillAmount: {
    height: 12,
    backgroundColor: '#EBD06E',
    transition: 'all 1s ease',
  },
  skillTitle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 10,
    padding: 0,
  },
  externalLink: {
    color: '#0D2831',
    fontFamily: 'Avenir-Medium',
  },
  email: {
    textAlign: 'center',
    color: '#0D2831',
    fontFamily: 'Avenir-Medium',
    fontSize: 18,
    letterSpacing: 6,
    textDecoration: 'none',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}

class App extends Component {

  get skills() {
    const skillSet = [
      {title: 'CSS3 / SCSS', amount: 90},
      {title: 'HTML5', amount: 90},
      {title: 'Javascript', amount: 70},
      {title: 'Angular JS', amount: 55},
      {title: 'PHP', amount: 10},
      {title: 'React JS', amount: 75},
      {title: 'Adobe Photoshop', amount: 80},
      {title: 'Adobe Illustrator', amount: 70},
      {title: 'Adobe XD', amount: 85},
      {title: 'Sketch', amount: 85},
      {title: 'GitHub', amount: 65},
      {title: 'Cooking', amount: 60}
    ]

    const skills = skillSet.map((skill, i) =>
      <div style={style.skill} key={i}>
        <div style={style.skillBar}><div style={Object.assign({}, style.skillAmount, {width: `${skill.amount}%`})} /></div>
        <p style={style.skillTitle}>{skill.title}</p>
      </div>
    )

    return skills
  }

  render() {
    let sliderSettings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    return (
      <div style={style.body}>
        <div style={style.header}>
          <img style={style.logo} src="/imgs/logo.png" />
          <div style={style.caption}>web designer & developer</div>
        </div>

        <div style={style.content}>
          <div style={style.portfolio}>

            <div style={style.section}>
              <div style={style.phones}>
                <div style={Object.assign({}, style.phone, {transform: 'rotate(-3deg)',top: 60})} className="phone">
                  <img style={style.image} src="imgs/tablecloth_menuOpen_phone.png" />
                  <div style={style.shadow} />
                </div>
                <div style={Object.assign({}, style.phone, {transform: 'rotate(2deg)'})} className="phone">
                  <img style={style.image} src="imgs/tablecloth_dashboard_phone.png" />
                  <div style={style.shadow} />
                </div>
                <div style={Object.assign({}, style.phone, {transform: 'rotate(-2deg)',top: 60})} className="phone">
                  <img style={style.image} src="imgs/tablecloth_categories_phone.png" />
                  <div style={style.shadow} />
                </div>
              </div>
              <div style={style.description}>TableCloth was suppose to be the answer to the question of life, the universe and everything.  What meals can I cook with the ingredients I have on hand, all tracked by UPC/Barcode.  No need to leave the house to get a missing ingredient.  Unfortunately, the lack of continuity between food manufacturers and brands makes it almost impossible to  develop usable data.  So for now, 42 will continue to be the answer.  These are mock ups, designed in Adobe XD for a potential iOS app.</div>
            </div>

            <div style={style.section}>
              <div style={style.item}>
                <img style={style.image} src="imgs/ggb_cobrand_home.jpg" />
                <div style={style.shadow} />
              </div>
              <div style={style.description}>greenback is nationwide savings network that gives members access to over 350,000 merchant offers and product discounts on their mobile and web devices while helping support a great cause.  I acted as the lead front-end developer and designer for the majority of the web based application.  Built upon Angular 1.5, HTML5, and SASS. <br /><br /><a href="http://getgreenback.com" style={style.externalLink} target="_blank">getgreenback.com</a> | <a href="http://ocps.gogreenback.com" style={style.externalLink} target="_blank">ocps.gogreenback.com</a></div>
            </div>

            <div style={style.section}>
              <div style={style.item}>
                <img style={style.image} src="imgs/ggb_cobrand_home_v2.jpg" />
                <div style={style.shadow} />
              </div>
              <div style={style.description}>Causes using greenack for fundraising opportunities can create their own Cause Site to promote their chartiable events and actions to potentional donors and new members of greenback.  This is a mock up of a redesigned portion of that Cause Site.  Reducing clutter from the design allows the potential donors's attention to focus on a clear message from the Cause.  Designed in Sketch, to be built using React.</div>
            </div>

            <div style={style.section}>
              <div style={Object.assign({}, style.item, style.itemLarge)}>
                  <Slider {...sliderSettings} style={style.slider}>
                      <img style={style.image} src="imgs/mgmt_portal_01.jpg" />
                      <img style={style.image} src="imgs/mgmt_portal_02.jpg" />
                      <img style={style.image} src="imgs/mgmt_portal_03.jpg" />
                  </Slider>
                <div style={style.shadow} />
              </div>

              <div style={style.description}>Continuing with greenback, once a 5013c joins to become a Cause, they are presented with a Management Portal.  Within the portal, the Cause can manage their Cause Site, update basic charity information, create individual fundraisers to raise money, and many more features.  Acting as the lead designer and front-end developer. Designed in Sketch, built in React, using React-Admin.</div>
            </div>

            <div style={style.section}>
              <div style={style.item}>
                <img style={style.image} src="imgs/vertol.png" />
                <div style={style.shadow} />
              </div>
              <div style={style.description}>Vertol was an experimental logo design.  The idea behind it was to make it have the look and feel of an old school NASA or Air Force flight patch.  Designed in Adobe Illustrator</div>
            </div>

            <div style={style.section}>
              <div style={style.skillWrapper}>
                <div style={style.sectionTitle}>skill set</div>
                <div style={style.skillContent}>
                  {this.skills}
                </div>
              </div>
            </div>

            <div style={style.section}>
              <a style={style.email} href="mailto:work@ryanjay.com">work@ryanjay.com</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
