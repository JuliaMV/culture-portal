import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import indexContentStyles from '../IndexContent.module.scss';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: 32,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 50,
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
});

const IndexContent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
        About portal
        </Typography>
        <Typography gutterBottom className={indexContentStyles.textDescription}>
        The end of the 1920s was the beginning of dynamic architectural activity
        in Belarus. Until that time, main actionscame down to restoration, renovation,
        and adaptation of existing buildings. The tasks that the country faced demanded
         consolidation of all the creative forces of the republic. In 1932, a committee
         forcreating a union of Soviet architects was established. Members of the Union
         of Belarusian architects participated in the renovation and building of cities
         and villages of Belarus, establishment of Belarusian soviet architecture.
          <br />
         This portal gives you a chance to learn about brilliant architects, as well as
         find information about our compatriots who contributed significantly to the
         development of Belarusianarchitecture. Here you can find a collection of their
         biographies with interesting facts, photos of their works, videos, related to
         their activities or the era in which they lived, and much more information on
         the most prominent representatives of Belarusian architectural school.
        </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default IndexContent;
