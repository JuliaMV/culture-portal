import React, { Component } from 'react';
import { navigate } from 'gatsby';
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

    const path = e.currentTarget.href.split('/').pop();
    if (path === '') {
      navigate('/');
    } else {
      document.querySelector(`#${path}`).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  render = () => {
    const images = [
      {
        name: <FaHome />,
        path: '/',
      },
      { name: <FaCalendarAlt />, path: 'typog' },
      { name: <FaYoutube />, path: 'youtube' },
      { name: <FaMapMarkedAlt />, path: 'geo' },
      { name: <FaTable />, path: 'works' },
      { name: <FaImages />, path: 'gally' },
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
