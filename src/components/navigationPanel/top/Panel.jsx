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
    console.log(111);
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
      <ButtonNavs
        key={`${Date.now()}${Math.random()}${name}`}
        onClick={this.handleClick}
      >
        {name}
      </ButtonNavs>
    ));
    return (
      <div className="navigationPanelTop">
        <IconContext.Provider
          value={{ color: 'white', size: '70%', className: 'icon' }}
        >
          {navsArray}
        </IconContext.Provider>
      </div>
    );
  };
}

export default NavigationPanel;
