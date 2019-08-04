import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import aboutPortalStyles from './AboutPortal.module.scss';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h5: {
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      body2: {
        fontSize: 18,
      },
    },
  },
});

const AboutPortal = () => (
  <Box className={aboutPortalStyles.containerAboutPortal}>
    <ThemeProvider theme={theme}>
      <Typography variant="h5" component="h2">
        <FormattedMessage id="aboutPortal" />
      </Typography>

      <Box className={aboutPortalStyles.textWrapper}>
        <Typography variant="body2" className={aboutPortalStyles.sectionText}>
          <FormattedMessage id="aboutPortalText1" />
        </Typography>
        <Typography variant="body2" className={aboutPortalStyles.sectionText}>
          <FormattedMessage id="aboutPortalText2" />
        </Typography>

      </Box>
    </ThemeProvider>
  </Box>
);

export default AboutPortal;
