import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherApi from './api/WeatherApi';
import App from './App';
import { ProgressComponent } from './features/sharedComponents';
import { WeatherComponent } from './features/WeatherComponent';

configure({ adapter: new Adapter() });
jest.mock('./api/WeatherApi');

describe('App:', () => {

  beforeEach(() => {
    const dataJson = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":15.36,"feels_like":8.2,"temp_min":14.44,"temp_max":16.67,"pressure":1013,"humidity":51},"visibility":10000,"wind":{"speed":8.7,"deg":260},"clouds":{"all":47},"dt":1593984507,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1593921051,"sunset":1593980346},"timezone":3600,"id":2643743,"name":"London","cod":200}';
    const data = JSON.parse(dataJson);
    WeatherApi.getWeatherData.mockImplementationOnce(() => Promise.resolve(data));
  });

  it('Component - renders correctly containing the ProgressComponent', () => {
    const app = shallow(<App/>);
    expect(app.find(ProgressComponent).length).toBe(1);
  });

  it('Component - renders correctly containing the WeatherComponent', () => {
    const app = shallow(<App/>);
    expect(app.find(WeatherComponent).length).toBe(1);
  });

});