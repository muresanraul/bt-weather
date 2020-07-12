import React from 'react';

import ProgressComponent from './Progress.Component';

export default {
  title: 'Progress Bar Component',
  component: ProgressComponent,
  includeStories: ['ProgressLine0seconds', 'ProgressLine25seconds', 'ProgressLine60seconds']
};

const containerStyle = {
  height: '150px',
  width: '300px',
  borderColor: '#ff0000',
  borderWidth: '1px',
  borderStyle: 'solid',
  position: 'relative'
}

export const ProgressLine0seconds = () => (
  <div style={containerStyle}>
    <ProgressComponent time={0} />
  </div>
);

export const ProgressLine25seconds = () => (
  <div style={containerStyle}>
    <ProgressComponent time={25} />
  </div>
);

export const ProgressLine60seconds = () => (
  <div style={containerStyle}>
    <ProgressComponent time={60} />
  </div>
);
