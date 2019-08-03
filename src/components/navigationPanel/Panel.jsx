/* eslint-disable comma-dangle */
import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaYoutube,
  FaHome,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaTable,
  FaImages
} from 'react-icons/fa';
import { ButtonTop } from '../navigationButtons';
import './Panel.css';

const NavigationPanel = () => {
  const images = [
    { name: <FaHome />, path: '#' },
    { name: <FaCalendarAlt />, path: '#' },
    { name: <FaYoutube />, path: '#' },
    { name: <FaMapMarkedAlt />, path: '#' },
    { name: <FaTable />, path: '#' },
    { name: <FaImages />, path: '#' }
  ];
  const navsArray = images.map(({ name, path }) => (
    <IconContext.Provider
      key={`${Date.now()}${Math.random()}`}
      value={{ color: 'white', size: '70%', className: 'icon' }}
    >
      <ButtonTop link={path}>{name}</ButtonTop>
    </IconContext.Provider>
  ));
  return <div className="navigationWrapper">{navsArray}</div>;
};

export default NavigationPanel;
