import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, link }) => (
  <a className="navigationButton" href={link}>
    {children}
  </a>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line comma-dangle
  link: PropTypes.node.isRequired
};
export default Button;
