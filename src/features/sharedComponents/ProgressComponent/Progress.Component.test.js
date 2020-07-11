import React from 'react';
import renderer from 'react-test-renderer';

import { default as ProgressComponent } from './Progress.Component';

describe('ProgressComponent:', () => {

  it('renders width the progress correctly - 0 sec', () => {
    const progressComponent = renderer.create(
      <ProgressComponent time={0} />
    ).toJSON();
    expect(progressComponent).toMatchSnapshot();
  });

  it('renders width the progress correctly - 25 sec', () => {
    const progressComponent = renderer.create(
      <ProgressComponent time={25} />
    ).toJSON();
    expect(progressComponent).toMatchSnapshot();
  });

  it('renders width the progress correctly - 60 sec', () => {
    const progressComponent = renderer.create(
      <ProgressComponent time={60} />
    ).toJSON();
    expect(progressComponent).toMatchSnapshot();
  });

});
