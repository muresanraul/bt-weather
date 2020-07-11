import React from 'react';
import renderer from 'react-test-renderer';

import { default as WeatherComponent } from './Weather.Component';
import { WeatherService } from './Weather.Service';

describe('WeatherComponent:', () => {

  it('Component - renders correctly with no properties', () => {
    const weatherComponent = renderer.create(
      <WeatherComponent />
    ).toJSON();
    expect(weatherComponent).toMatchSnapshot();
  });

  it('Component - renders correctly with set properties', () => {
    const props = {
      weather_main: 'weather_main',
      weather_description: 'weather_description',
      weather_icon: 'weather_icon',
      temp: 1,
      feels_like: 2,
      temp_min: 3,
      temp_max: 4,
      pressure: 5,
      humidity: 6,
      visibility: 7,
      wind_speed: 8,
      country: 'country',
      city: 'city'
    }
    const weatherComponent = renderer.create(
      <WeatherComponent {...props} />
    ).toJSON();
    expect(weatherComponent).toMatchSnapshot();
  });
});

describe('WeatherService:', () => {
  test('Method - formatWetherData(data) - returns correctly the processed weather data', () => {
    const data = {
      weather_main: 'weather_main',
      weather_description: 'weather_description',
      weather_icon: 'weather_icon',
      temp: 1,
      feels_like: 2,
      temp_min: 3,
      temp_max: 4,
      pressure: 5,
      humidity: 6,
      visibility: 7,
      wind_speed: 8,
      country: 'country',
      city: 'city'
    };

    const actual = WeatherService.formatWetherData(data);

    const expected = {
      weather_main: 'weather_main',
      weather_description: 'weather_description',
      weather_icon: 'weather_icon',
      temp: '1 C⁰',
      feels_like: '2 C⁰',
      temp_min: '3 C⁰',
      temp_max: '4 C⁰',
      pressure: '5 hPa',
      humidity: '6 %',
      visibility: '7 m',
      wind_speed: '8 m/s',
      country: 'country',
      city: 'city'
    };

    expect(actual).toEqual(expected);
  });

  test('Method - formatWetherData(data) - returns the "unknown" value for string and number properties that are not defined', () => {
    const data = {weather_icon: 'weather_icon',};

    const actual = WeatherService.formatWetherData(data);

    const expected = {
      weather_main: 'unknown',
      weather_description: 'unknown',
      weather_icon: 'weather_icon',
      temp: 'unknown',
      feels_like: 'unknown',
      temp_min: 'unknown',
      temp_max: 'unknown',
      pressure: 'unknown',
      humidity: 'unknown',
      visibility: 'unknown',
      wind_speed: 'unknown',
      country: 'unknown',
      city: 'unknown'
    };

    expect(actual).toEqual(expected);
  });

  test('Method - formatWetherData(data) - returns the weather_icon property as undefined if data.weather_icon property is not defined', () => {
    const data = {
      weather_main: 'weather_main',
      weather_description: 'weather_description',
      temp: 1,
      feels_like: 2,
      temp_min: 3,
      temp_max: 4,
      pressure: 5,
      humidity: 6,
      visibility: 7,
      wind_speed: 8,
      country: 'country',
      city: 'city'
    };

    const actual = WeatherService.formatWetherData(data);

    const expected = {
      weather_main: 'weather_main',
      weather_description: 'weather_description',
      weather_icon: undefined,
      temp: '1 C⁰',
      feels_like: '2 C⁰',
      temp_min: '3 C⁰',
      temp_max: '4 C⁰',
      pressure: '5 hPa',
      humidity: '6 %',
      visibility: '7 m',
      wind_speed: '8 m/s',
      country: 'country',
      city: 'city'
    };

    expect(actual).toEqual(expected);
  });
});
