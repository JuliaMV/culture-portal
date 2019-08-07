import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';

import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import AboutPortal from '../components/aboutportal/AboutPortal';
import Team from '../components/team/Team';
import Layout from '../components/layout/Layout';
import ArtistCard from '../components/artistcard/ArtistCard';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h5: {
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    padding: '30px 10px',
  },
});

const IndexPage = ({ data, location }) => {
  const classes = useStyles();
  const currentArtistList = data.allContentfulArchitectPage.edges;
  const numberOfArtists = currentArtistList.length;
  const currentDateMs = Date.now();
  const currentDate = new Date(currentDateMs);
  const currentDay = currentDate.getDate();
  const randomArtistIndex = (currentDay - 1) % numberOfArtists;
  return (
    <Layout data={data} location={location}>
      <Paper>
        <AboutPortal />
      </Paper>
      <Paper>
        <Box className={classes.root}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5" component="h2">
              <FormattedMessage id="AuthorOfDay" />
            </Typography>
          </ThemeProvider>
          <ArtistCard queryData={currentArtistList[randomArtistIndex]} />
        </Box>
      </Paper>
      <Paper>
        <Team />
      </Paper>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulArchitectPage: PropTypes.shape({ edges: PropTypes.array.isRequired }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
query RuQuery {
  allContentfulArchitectPage(filter: {lang: {eq: "ru"}}, sort: {fields: surname___surname}) {
    edges {
      node {
        slug
        lang
        patronymic {
          patronymic
        }
        name {
          name
        }
        personalPhoto {
          file {
            url
            fileName
          }
        }
        photoGallery {
          file {
            url
          }
          title
        }
        surname {
          surname
        }
        videoTag {
          videoTag
        }
        yearsOfLife
        listOfWorks {
          content {
            content {
              value
            }
          }
        }
        generalInfo {
          content {
              content {
                  value
              }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }
    }
  }
}
`;
