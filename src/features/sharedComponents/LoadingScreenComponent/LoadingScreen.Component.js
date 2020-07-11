import React from 'react';

import './LoadingScreen.Component.scss';

const LoadingSpinner = () => {
  return <div className = "lds-css ng-scope">
    <div className="lds-spin" style={{ width: '100%', height: '100%' }}>
      <div><div></div></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
      <div><div /></div>
    </div>
  </div>
}

const LoadingScreenComponent = props => {


  return (
    <div className="LoadingScreen">
      <div className="LoadingScreen--background">
        <div className="LoadingScreen--message"><LoadingSpinner /></div>
      </div>
    </div>
  );
};

export default LoadingScreenComponent ;
