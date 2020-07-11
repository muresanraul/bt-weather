import React from 'react';
import PropTypes from 'prop-types';

import { DynamicTextComponent, ImageLoaderComponent, LoadingScreenComponent } from './../sharedComponents/';
import { TEXTS } from './../../configurations';
import { WeatherService } from './Weather.Service';
import './Weather.Component.scss';

function WeatherComponent(props) {

  const { WEATHER_TEMPERATURE, WEATHER_FEELS_LIKE, WEATHER_VISIBILITY, WEATHER_HUMIDITY,
    WEATHER_MAXIMUM_TEMPERATURE, WEATHER_PRESURE, WEATHER_MINIMUM_TEMPERATURE, WIND_SPEED } = TEXTS

  const {
    weather_main, weather_description, weather_icon, temp, feels_like,
    temp_min, temp_max, pressure, humidity, visibility, country, city, wind_speed
  } = props?.data ? WeatherService.formatWetherData(props.data) : {};

  const location = (city && country) && `${city}, ${country}`

  return (
    <div className="weather">
      {!props.data && (
        <LoadingScreenComponent />
      )}
      <>
        <div className='weather__title'><div><DynamicTextComponent text={location} color={'#ecf8ff'} fontSize={'5rem'} justify={'center'} /></div></div>
        <div className='weather__main-details'>
          <div className='weather__main-details-name'><DynamicTextComponent text={weather_main} fontSize={'5rem'} justify={'center'} /></div>
          <div className='weather__main-details-img'><ImageLoaderComponent img={weather_icon} alt={weather_main} /></div>
          <div className='weather__main-details-explenation'><DynamicTextComponent text={weather_description} fontSize={'2.5rem'} justify={'center'} /></div>
        </div>

        <div className='weather__container'>
          <div className='weather__column'>

            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_TEMPERATURE}</div>
              <div className='weather__data'><DynamicTextComponent text={temp} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_FEELS_LIKE}</div>
              <div className='weather__data'><DynamicTextComponent text={feels_like} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_MINIMUM_TEMPERATURE}</div>
              <div className='weather__data'><DynamicTextComponent text={temp_min} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_MAXIMUM_TEMPERATURE}</div>
              <div className='weather__data'><DynamicTextComponent text={temp_max} /></div>
            </div>
          </div>
          <div className='weather__column'>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_PRESURE}</div>
              <div className='weather__data'><DynamicTextComponent text={pressure} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_HUMIDITY}</div>
              <div className='weather__data'><DynamicTextComponent text={humidity} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WEATHER_VISIBILITY}</div>
              <div className='weather__data'><DynamicTextComponent text={visibility} /></div>
            </div>
            <div className='weather__row'>
              <div className='weather__label'>{WIND_SPEED}</div>
              <div className='weather__data'><DynamicTextComponent text={wind_speed} /></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

const { shape, string, number } = PropTypes;

WeatherComponent.propTypes = {
  data: shape({
    weather_main: string.isRequired, 
    weather_description: string.isRequired,
    weather_icon: string.isRequired,
    temp: number.isRequired,
    feels_like: number.isRequired,
    temp_min: number.isRequired,
    temp_max: number.isRequired,
    pressure: number.isRequired,
    humidity: number.isRequired,
    visibility: number.isRequired,
    wind_speed: number.isRequired,
    country: string.isRequired,
    city: string.isRequired
  }),
};

export default WeatherComponent;