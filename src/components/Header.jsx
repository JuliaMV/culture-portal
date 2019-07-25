import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import SelectLanguage from './SelectLanguage';

const Header = ({ langs }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
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
    </div>
  </div>
);

Header.propTypes = {
  langs: PropTypes.string.isRequired,
};

export default Header;
