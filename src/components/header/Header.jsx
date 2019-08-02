import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Container from '@material-ui/core/Container';
import { FormattedMessage } from 'react-intl';
// @ts-ignore
import headerStyles from './Header.module.scss';

// you can change the labels for buttons in 'data/messages' en.js, ru.js, be.js accordingly
const Header = ({ url }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerWrapper}>
      <Container>
        <Link to={`${url}`} className={headerStyles.logoLink}>
          <h1 className={headerStyles.headerTextLogo}>
            <FormattedMessage id="logo" />
          </h1>
        </Link>
      </Container>
      <ul className={headerStyles.listNav}>
        <li className={headerStyles.listNav_item}>
          <Link to={`${url}`}>
            <FormattedMessage id="mainPageButton" />
          </Link>
        </li>
        <li className={headerStyles.listNav_item}>
          <Link to={`${url}artists`}>
            <FormattedMessage id="artistsPageButton" />
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Header;
