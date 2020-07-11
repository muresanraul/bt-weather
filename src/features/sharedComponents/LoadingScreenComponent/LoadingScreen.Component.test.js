import React from 'react';
import renderer from 'react-test-renderer';

import { default as LoadingScreenComponent } from './LoadingScreen.Component';

describe('LoadingScreenComponent:', () => {

  it('Component - renders correctly', () => {
    const loadingScreenComponent = renderer.create(
      <LoadingScreenComponent/>
    ).toJSON();
    expect(loadingScreenComponent).toMatchSnapshot();
  });

});
