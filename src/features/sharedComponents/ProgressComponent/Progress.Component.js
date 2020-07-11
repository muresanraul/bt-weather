import React from 'react';
import PropTypes from 'prop-types';

import './Progress.Component.scss';

function ProgressComponent(props) {
  const time = props.time;
  const widthPercentage = Math.round((100 / 60) * time);

const style = {
  width: `${widthPercentage}%`
}
  return (
    <div className="progress">
      <div className="progress__bar" style={style} />
    </div>
  );
}

const { number } = PropTypes;

ProgressComponent.propTypes = {
  time: number.isRequired
};

export default ProgressComponent;