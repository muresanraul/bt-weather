import React from 'react';
import renderer from 'react-test-renderer';

import { default as ImageLoaderComponent } from './ImageLoader.Component';

describe('ImageLoaderComponent:', () => {

  it('Component - renders correctly with no properties', () => {
    const imageLoaderComponent = renderer.create(
      <ImageLoaderComponent />
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set image', () => {
    const props = {img: '/img.jpg'};
    const imageLoaderComponent = renderer.create(
      <ImageLoaderComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set image and alt', () => {
    const props = {img: '/img.jpg', alt: 'alt'};
    const imageLoaderComponent = renderer.create(
      <ImageLoaderComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with no image if the alt property is set but the img prop is not set', () => {
    const props = {alt: 'alt'};
    const imageLoaderComponent = renderer.create(
      <ImageLoaderComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

});
