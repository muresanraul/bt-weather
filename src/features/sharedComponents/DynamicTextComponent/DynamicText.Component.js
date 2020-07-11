import React from 'react';
import PropTypes from 'prop-types';

import './DynamicText.Component.scss';

function DynamicTextComponent(props) {

  const { text, color, fontSize, justify } = props

  const textStyle = {
    color,
    fontSize,
    justifyContent: justify
  };

  const placeholderStyle = {
    backgroundColor: color
  }
  return (
    <div className="dynamic-text">
      {text ? (
        <div style={textStyle} className="dynamic-text__text">{text}</div>
      ) : (
          <div style={placeholderStyle} className="dynamic-text__placeholder" />
        )}
    </div>
  );
}

const { string } = PropTypes;

DynamicTextComponent.propTypes = {
  text: string,
  color: string,
  fontSize: string, 
  justify: string
};

export default DynamicTextComponent;