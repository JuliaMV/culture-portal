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
    console.log(e.currentTarget.href.split('_separator_').pop());
    document
      .querySelector(`.${e.currentTarget.href.split('_separator_').pop()}`)
      .scrollIntoView({
        behavior: 'smooth',
      });
  };

  render = () => {
    const separator = '_separator_';
    const images = [
      { name: <FaHome />, path: '#' },
      { name: <FaCalendarAlt />, path: `${separator}artist__timeline` },
      { name: <FaYoutube />, path: `${separator}artist__video` },
      { name: <FaMapMarkedAlt />, path: `${separator}artist__map` },
      { name: <FaTable />, path: `${separator}artist__buildings` },
      { name: <FaImages />, path: `${separator}gallery` },
    ];
    const navsArray = images.map(({ name, path }) => (
      <ButtonNavs
        key={`${Date.now()}${Math.random()}${name}`}
        onClick={this.handleClick}
        section={path}
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
