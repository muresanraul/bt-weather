import { formatText } from '../helpers';

const weatherHost = 'http://api.openweathermap.org/data/2.5/weather';
const weatherIconUrl = 'http://openweathermap.org/img/wn/{icon}@2x.png';
const weatherApiId = 'ad232c5285db15075e3e2ece306f1649';
// const location = 'London,uk';
export default {

  weatherApiUrl: `${weatherHost}?q={location}&APPID=${weatherApiId}&units=metric`,
  weatherIconUrl
};

export const formatEndpoint = (templateUrl, placeholders) => formatText(templateUrl, placeholders);
