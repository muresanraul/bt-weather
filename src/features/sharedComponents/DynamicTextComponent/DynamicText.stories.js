import React from 'react';

import DynamicTextComponent from './DynamicText.Component';

export default {
  title: 'DynamicTextComponent',
  component: DynamicTextComponent,
  includeStories: ['noText', 'textSet', 'textCenter', 'textColor', 'textSize']
};

const containerStyle = { width: '250px', borderColor: '#ff0000', borderWidth: '1px', borderStyle: 'solid', padding: '0 5px' }

export const noText = () => (
<div style={containerStyle}>
  <DynamicTextComponent />
</div>
);

export const textSet = () => (
  <div style={containerStyle}>
    <DynamicTextComponent text={'textSet'} />
  </div>
);

export const textCenter = () => (
<div style={containerStyle}>
  <DynamicTextComponent text={'textSet'} justify={'center'} />
</div>
);

export const textColor = () => (
<div style={containerStyle}>
  <DynamicTextComponent text={'textSet'} color={'red'} />
</div>
);

export const textSize = () => (
  <div style={containerStyle}>
    <DynamicTextComponent text={'textSet'} fontSize={'40px'} />
  </div>
  );
