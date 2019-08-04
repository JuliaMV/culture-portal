import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowUp } from 'react-icons/fa';
import ButtonNavs from '../../navigationButton';
import './Panel.css';

class Panel extends Component {
  handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  render = () => (
    <div className="navigationPanelBot">
      <IconContext.Provider
        value={{ color: 'white', size: '70%', className: 'icon' }}
      >
        <ButtonNavs onClick={this.handleClick}>
          <FaArrowUp />
        </ButtonNavs>
      </IconContext.Provider>
    </div>
  );
}

export default Panel;
