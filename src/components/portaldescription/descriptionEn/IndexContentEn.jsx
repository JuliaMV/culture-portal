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
        // fontWeight: 'bold',
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
    marginBottom: '1.5rem',
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
        Active architectural activity began in Belarus at the end of the 1920s.
        Until that time, the main idea was restoration, reconstruction, and adaptation
        of existing buildings. It demanded the consolidation of all the creative forces
        of the republic. In 1932, a committee was formed by unification of the Soviet architects.
        Architects members of the Union of Byelorussian architects participated in the
        reconstruction and construction of cities and villages of Belarus. On this portal
        you can know about brilliant architects, also you can find information about our
        compatriots who have left a significant mark in the development of architecture Belarus.
          <br />
        Here we collected the biographies of them with interesting facts, photos of their works,
        videos, related to their activities or the era in which they lived, and ect.
        </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default IndexContent;
