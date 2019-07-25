import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = ({ langs }) => {
  const links = langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: 'white',
      }}
    >
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  ));

  return (
    <section>
      <header style={{
        color: 'white',
      }}
      >
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectLanguage;
