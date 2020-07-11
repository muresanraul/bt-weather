import _ from 'lodash';

export const formatText = (templateUrl, placeholders) => {
  let s = templateUrl;
  _.forIn(placeholders, (value, propertyName) => {
    const re = new RegExp(`{${propertyName}}`, 'gm');
    s = s.replace(re, value);
  });
  return s;
};

const transformOnlyFirst = (text) => {
  return _.toLower(text).split(' ').map((i) => { return i.slice(0, 1).toUpperCase() + i.slice(1); }).join(' ');
};

export const removeAllCaps = (toTransform, exceptions) => {
  let s = toTransform;
  if (typeof toTransform === 'object') {
    // transform object
    _.each(toTransform, (prop, key) => {
      if (_.indexOf(exceptions, key) === -1 && typeof prop === 'string') {
        s[key] = transformOnlyFirst(prop);
      } else {
        s[key] = prop;
      }
    });
  } else {
    // transform string
    s = transformOnlyFirst(toTransform);
  }
  return s;
};

export const formatDecimal = (val, decimals) => {
  if (!val) {
    return undefined;
  }

  let s = val.toString();
  const i = s.indexOf('.');
  s = s.replace(/\.(?=\d)/g, ',');
  if (decimals && decimals > 0) {
    s = i > -1 ? s.slice(0, i + decimals + 1) : s + ',' + (decimals * '0'); // eslint-disable-line prefer-template
  } else {
    s = i > -1 ? s.slice(0, i) : s;
  }
  return s;
};

export const formatValueWithUnit = (val, unit = '') => {
  if (!val) {
    return '-';
  }

  return `${val} ${unit}`;
};
