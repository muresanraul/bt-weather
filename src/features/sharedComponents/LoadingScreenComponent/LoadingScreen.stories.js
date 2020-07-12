import React from 'react';

import LoadingScreenComponent from './LoadingScreen.Component';

export default {
  title: 'Loading Screen Component',
  component: LoadingScreenComponent,
  includeStories: ['defaultLoader']
};

const containerStyle = {
  height: '300px',
  width: '300px',
  borderColor: '#ff0000',
  borderWidth: '1px',
  borderStyle: 'solid',
  position: 'relative'
}

export const defaultLoader = () => (
<div style={containerStyle}>
  <LoadingScreenComponent />
</div>

);
