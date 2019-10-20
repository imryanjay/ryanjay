import React from 'react';
import PropTypes from 'prop-types';

let style = {
  work: {
    position: 'relative',
    maxWidth: 600,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    left: '5%',
    bottom: 2,
    width: '90%',
    height: 170,
    boxShadow: '0 40px 45px 0 rgba(0,0,0,0.20)'
  },
  description: {
    marginTop: 60,
    maxWidth: 700,
    letterSpacing: 1,
    lineHeight: 1.7,
    fontSize: 14,
    textAlign: 'center',
  },
}

const Project = ({children, image, description, ...props}) => {
  if (props.size === 'large') {
    style.work.maxWidth = 1014;
  }

  return (
    <div style={style.project}>
      <div style={style.work}>
        {children ? (
          children
        ) : (
          <div>
            <img style={style.image} src={image} />
            <div style={style.shadow} />
          </div>
        )}
      </div>
      <div style={style.description}>{description}</div>
    </div>
  )
}

Project.defaultProps = {
  size: "medium"
};

export default Project
