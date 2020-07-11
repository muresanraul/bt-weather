import axios from 'axios';

const setConfig = (config = {}) => {

  const cfg = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    ...config
  };
  return cfg;

};

class RestHelper {

  static async get(url, config = {}) {
    const options = setConfig({ ...config, method: 'GET' });
    const response = await axios(url, options);
    return response;
  }

  static async put(url, data, config = {}) {
    const options = setConfig({ ...config, data, method: 'PUT' });
    const response = await axios(url, options);
    return response;
  }

  static async post(url, data, config = {}) {
    const options = setConfig({ ...config, data, method: 'POST' });
    const response = await axios(url, options);
    return response;
  }

  static async delete(url, data, config = {}) {
    const options = setConfig({ ...config, data, method: 'DELETE' });
    const response = await axios(url, options);
    return response;
  }

}
export default RestHelper;