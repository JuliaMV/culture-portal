import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import {
  FaYoutube,
  FaHome,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaTable,
  FaImages,
} from 'react-icons/fa';
import ButtonNavs from '../../navigationButton';
import './Panel.css';

class NavigationPanel extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render = () => {
    const images = [
      { name: <FaHome />, path: '#' },
      { name: <FaCalendarAlt />, path: '#timelineTitle' },
      { name: <FaYoutube />, path: '#' },
      { name: <FaMapMarkedAlt />, path: '#' },
      { name: <FaTable />, path: '#' },
      { name: <FaImages />, path: '#' },
    ];
    const navsArray = images.map(({ name }) => (
      <IconContext.Provider
        key={`${Date.now()}${Math.random()}${name}`}
        value={{ color: 'white', size: '70%', className: 'icon' }}
      >
        <ButtonNavs onClick={this.handleClick}>{name}</ButtonNavs>
      </IconContext.Provider>
    ));
    return <div className="navigationPanelTop">{navsArray}</div>;
  };
}

export default NavigationPanel;
