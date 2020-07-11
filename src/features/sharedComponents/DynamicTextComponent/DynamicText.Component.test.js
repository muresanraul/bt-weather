import React from 'react';
import renderer from 'react-test-renderer';

import { default as DynamicTextComponent } from './DynamicText.Component';

describe('DynamicTextComponent:', () => {

  it('Component - renders correctly with no properties', () => {
    const dynamicTextComponent = renderer.create(
      <DynamicTextComponent />
    ).toJSON();
    expect(dynamicTextComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set text property', () => {
    const props = {text: 'text'}
    const imageLoaderComponent = renderer.create(
      <DynamicTextComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set text and fontSize properties', () => {
    const props = {text: 'text', fontSize: '12px'}
    const imageLoaderComponent = renderer.create(
      <DynamicTextComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set text, fontSize and color properties', () => {
    const props = {text: 'text', fontSize: '12px', color: 'red'}
    const imageLoaderComponent = renderer.create(
      <DynamicTextComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set fontSize and color properties but no text property set, ', () => {
    const props = {text: 'text', fontSize: '12px', color: 'red'}
    const imageLoaderComponent = renderer.create(
      <DynamicTextComponent {...props}/>
    ).toJSON();
    expect(imageLoaderComponent).toMatchSnapshot();
  });
});
