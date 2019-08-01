import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import SelectLanguage from '../selectlanguage/SelectLanguage';
import headerStyles from './Header.module.scss';

const ColorButton = withStyles(theme => ({
  root: {
    height: 48,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[700],
    },

    boxShadow: '0px -6px 13px 2px rgb(55, 71, 79)',
  },
}))(Button);


// you can change the labels for buttons in 'data/messages' en.js, ru.js, be.js accordingly
const Header = ({ langs, url }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerWrapper}>
      <Container>
        <Link to={`${url}`} className={headerStyles.logoLink}>
          <h1 className={headerStyles.headerTextLogo}>
            <FormattedMessage id="logo" />
          </h1>
        </Link>
        <SelectLanguage langs={langs} />
      </Container>
      <ButtonGroup fullWidth>
        <ColorButton variant="contained" href={`${url}`}>
          <FormattedMessage id="mainPageButton" />
        </ColorButton>
        <ColorButton variant="contained" href={`${url}artists`}>
          <FormattedMessage id="artistsPageButton" />
        </ColorButton>
      </ButtonGroup>
    </div>
  </header>
);

Header.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
};

export default Header;
