import RestHelper from './RestHelper';
import { default as WeatherApi } from './WeatherApi';


jest.mock('./RestHelper');
describe('WeatherApi:', () => {

  it('getWeatherData(location) - fetches successfully data from an API', async () => {
    const data = {data: 'data'};
    RestHelper.get.mockImplementationOnce(() => Promise.resolve(data));
    const location = 'London,uk';
    const response = await WeatherApi.getWeatherData(location);
    expect(response).toEqual(data);
  });

  it('getWeatherData(location) - should throw error', async () => {
    RestHelper.get.mockImplementationOnce(() => Promise.resolve(new Error('fail')));
    const location = 'London,uk';
  
    try {
      await WeatherApi.getWeatherData(location) 
    } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
        expect(error).toHaveProperty('message', 'fail');
    }

  });
});