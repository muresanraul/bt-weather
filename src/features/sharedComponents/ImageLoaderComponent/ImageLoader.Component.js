import React from 'react';
import PropTypes from 'prop-types';

import Endpoints, { formatEndpoint } from '../../../configurations/endpoints';
import './ImageLoader.Component.scss';

function ImageLoaderComponent(props) {

  let isActive = false;
  let imgUrl = '';
  let alt = '';
  if (props.img !== undefined) {
    isActive = true;
    imgUrl = formatEndpoint(Endpoints.weatherIconUrl, {icon: props.img});
    alt = props.alt ? props.alt : '';
  }
  return (
    <div className="image-loader">
      {isActive ? (
        <img src={imgUrl} alt={alt} />
      ) : (
        <div className="image-loader__placeholder" />
      )}
    </div>
  );
}

const { string } = PropTypes;

ImageLoaderComponent.propTypes = {
  img: string, 
  alt: string
};

export default ImageLoaderComponent;