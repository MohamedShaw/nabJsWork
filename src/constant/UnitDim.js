const React = require('react-native');

const { Dimensions } = React;

const { width, height } = Dimensions.get('window');

// units.vmin = Math.min(units.vw, units.vh);
// units.vmax = Math.max(units.vw, units.vh);

export const vw = width / 100;
export const vh = height / 100;
