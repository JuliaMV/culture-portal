import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SelectLanguage from '../SelectLanguage';
import styles from './Header.module.scss';

const Header = ({ langs }) => (
  <div className={styles.Header}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <SelectLanguage langs={langs} />
      <button type="button">
        <FormattedMessage id="authorsPageButton" />
      </button>
      <button type="button">
        <FormattedMessage id="mainPageButton" />
      </button>
    </div>
  </div>
);

Header.propTypes = {
  langs: PropTypes.string.isRequired,
};

export default Header;
