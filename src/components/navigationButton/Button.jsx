/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, section = '' }) => (
  <a
    className="navigationButton"
    onClick={onClick}
    role="button"
    tabIndex="-1"
    href={section}
  >
    {children}
  </a>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.isRequired,
  section: PropTypes.isRequired,
};
export default Button;
