import React from 'react';

import ImageLoaderComponent from './ImageLoader.Component';

export default {
  title: 'Image Loader Component',
  component: ImageLoaderComponent,
  includeStories: ['noImageSet', 'ImageSet']
};

const containerStyle = {
  height: '100px',
  width: '100px',
  borderColor: '#ff0000',
  borderWidth: '1px',
  borderStyle: 'solid',
  position: 'relative'
}

export const noImageSet = () => (
<div style={containerStyle}>
  <ImageLoaderComponent />
</div>
);

export const ImageSet = () => (
  <div style={containerStyle}>
    <ImageLoaderComponent text={'textSet'} img={'http://openweathermap.org/img/wn/02d@2x.png'} alt={'few clouds'} />
  </div>
);
