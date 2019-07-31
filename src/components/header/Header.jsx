import React from 'react';
// import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

// import SelectLanguage from '../SelectLanguage';
// @ts-ignore
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

//  header props was { langs }
const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerWrapper}>
      <Container>
        <Link to="/" className={headerStyles.logoLink}>
          <h1 className={headerStyles.headerTextLogo}>Architects of Belarus</h1>
        </Link>
        {/* <SelectLanguage langs={langs} />  !Anna Klempach it's tag for button translations */}
      </Container>
      <ButtonGroup fullWidth>
        <ColorButton variant="contained" href="/">
            Main
        </ColorButton>
        <ColorButton variant="contained" href="/list-of-architecture">
            List of architecture
        </ColorButton>
      </ButtonGroup>
    </div>
  </header>
);

// Header.propTypes = {
//   langs: PropTypes.string.isRequired,
// };

export default Header;
