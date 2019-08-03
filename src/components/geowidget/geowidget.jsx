import React from 'react';
import PropTypes from 'prop-types';

const Geowidget = ({ url }) => (
  <iframe title="map" src={url} width="100%" height="400" frameBorder="0" />
);

Geowidget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Geowidget;
