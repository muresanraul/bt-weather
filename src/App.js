import React from 'react';

import { WeatherApi } from './api/';
import { WeatherComponent } from './features/WeatherComponent';
import { ProgressComponent } from './features/sharedComponents';
import { AppService } from './services';
import { LOCATION } from './configurations';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refrashDataInterval = null;
    this.state = {
      weatherData: null,
      timeElapsed: 0
    };
  }
  async componentDidMount(){
    this.getWeather();
    this.refrashDataInterval = setInterval(this.refrash, 1000);
  }

  refrash = () => {
    const time = this.state.timeElapsed + 1;
    if (time <= 60) {
      this.setState({timeElapsed: time})
    } else {
      this.setState({timeElapsed: 0}, this.getWeather )
    }
  }

  getWeather = async () => {
    const { data } = await WeatherApi.getWeatherData(LOCATION);
    const weatherData = AppService.getFormatedWeatherData(data)
    this.setState({weatherData})
  }

  componentWillUnmount() {
    clearInterval(this.refrashDataInterval);
  }

  render() {
    return (
      <div className="App">
        <ProgressComponent time={this.state.timeElapsed}/>
        <WeatherComponent data={this.state.weatherData}/>
      </div>
    );
  }
}

export default App;
