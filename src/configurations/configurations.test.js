import { LOCATION, TEXTS } from './texts';
import { default as endpoints, formatEndpoint } from './endpoints';

describe('In texts.js:', () => {

  it('LOCATION constant - should equal the expected value', () => {
    const expected = 'London,uk';
    expect(LOCATION).toBe(expected);
  });

  it('TEXTS constant - object properties should equal the expected values', () => {
    const expected = {
      WEATHER_TEMPERATURE: 'Temperature',
      WEATHER_FEELS_LIKE: 'Feels like',
      WEATHER_MINIMUM_TEMPERATURE: 'Minimum temperature',
      WEATHER_MAXIMUM_TEMPERATURE: 'Maximum temperature',
      WEATHER_PRESURE: 'Presure',
      WEATHER_HUMIDITY: 'Humidity',
      WEATHER_VISIBILITY: 'Visibility',
      WEATHER_LOCATION: 'Location',
      WIND_SPEED: 'Windspeed'
    };
    expect(TEXTS).toEqual(expected);
  });
});

describe('In endpoints.js:', () => {
  it('endpoints - object properties should equal the expected values', () => {
    const expected = {
      weatherApiUrl: 'http://api.openweathermap.org/data/2.5/weather?q={location}&APPID=ad232c5285db15075e3e2ece306f1649&units=metric',
      weatherIconUrl: 'http://openweathermap.org/img/wn/{icon}@2x.png'
    };
    expect(endpoints).toEqual(expected);
  });

  it('formatEndpoint function - processes and returns correctly the sting without placeholders', () => {
    const template = 'The quick brown fox jumps over the lazy dog';
    const expected = 'The quick brown fox jumps over the lazy dog';
    const actual = formatEndpoint(template, {});
    expect(expected).toBe(actual);
  });

  it('formatEndpoint function - processes and returns correctly the sting with 1 placeholder changed', () => {
    const template = 'The quick brown {placeholder} jumps over the lazy dog';
    const expected = 'The quick brown fox jumps over the lazy dog';
    const actual = formatEndpoint(template, { placeholder: 'fox' });
    expect(expected).toBe(actual);
  });

  it('formatEndpoint function - processes and returns correctly the sting without 1 placeholder change because of no cpeciffic request', () => {
    const template = 'The quick brown {placeholder} jumps over the lazy dog';
    const expected = 'The quick brown {placeholder} jumps over the lazy dog';
    const actual = formatEndpoint(template, {});
    expect(expected).toBe(actual);
  });

  it('formatEndpoint function - processes and returns correctly the sting without 1 placeholder change because of incorrect request', () => {
    const template = 'The quick brown {placeholder} jumps over the lazy dog';
    const expected = 'The quick brown {placeholder} jumps over the lazy dog';
    const actual = formatEndpoint(template, { place_holder: 'fox' });
    expect(expected).toBe(actual);
  });

  it('formatEndpoint function - returns correctly the unprocessed sting without placeholder and with speciffic change request', () => {
    const template = 'The quick brown fox jumps over the lazy dog';
    const expected = 'The quick brown fox jumps over the lazy dog';
    const actual = formatEndpoint(template, { placeholder: 'fox' });
    expect(expected).toBe(actual);
  });

  it('formatEndpoint function - processes and returns correctly the sting with 2 placeholders changed', () => {
    const template = 'The quick brown {placeholder_1} jumps over the lazy {placeholder_2}';
    const expected = 'The quick brown fox jumps over the lazy dog';
    const actual = formatEndpoint(template, { placeholder_1: 'fox', placeholder_2: 'dog' });
    expect(expected).toBe(actual);
  });
});
