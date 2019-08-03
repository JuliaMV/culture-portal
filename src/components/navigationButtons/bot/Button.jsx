/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable lines-between-class-members */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import './Button.css';

const Button = ({ children, onClick }) => (
  <a className="button__top" onClick={onClick}>
    <IconContext.Provider
      key={`${Date.now()}${Math.random()}`}
      value={{ color: 'white', size: '70%', className: 'icon' }}
    >
      {children}
    </IconContext.Provider>
  </a>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line comma-dangle
  onClick: PropTypes.node.isRequired
};
export default Button;
