import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import { red } from '@material-ui/core/colors';
import Video from '../components/video/Video';
import Layout from '../components/layout/Layout';
import Geowidget from '../components/geowidget/geowidget';
import Gallery from '../components/gallery/Gallery';
import ArtistTimeline from '../components/artisttimeline/ArtistTimeline';

import artistPageStyles from './artist-pageStyles.module.scss';

const styles = createMuiTheme({
  overrides: {
    MuiTypography: {
      h4: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      },
      h5: {
        fontWeight: 'bold',
        color: '#777777',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 50,
        marginBottom: 30,
      },
      body1: {
        fontWeight: 'bold',
      },
      subtitle1: {
        marginTop: 10,
        marginBottom: 10,
      },
      body2: {
        fontSize: 18,
      },
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    margin: '0 auto',
  },
  inline: {
    display: 'inline',
  },
  icon: {
    margin: theme.spacing(2),
    color: red[400],
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
    </SvgIcon>
  );
}

const ArtistPageTemplate = ({ data, location }) => {
  const artist = data.contentfulArchitectPage;
  const {
    yearsOfLife,
    videoTag: { videoTag },
    geoTag: { geoTag },
    surname: { surname },
    name: { name },
    patronymic: { patronymic },
    listOfWorks: {
      content,
    },
    generalInfo: {
      content: generalInfo,
    },
    personalPhoto: {
      file: {
        url,
      },
      title,
    },
    photoGallery,
  } = artist;

  const works = content.map((contentItem) => {
    const {
      content: [
        {
          value,
        },
      ],
    } = contentItem;
    return (
      <span key={`${value}`}>
        {value}
      </span>
    );
  });

  const generalInformation = generalInfo.map((contentItem) => {
    const {
      content: [
        {
          value,
        },
      ],
    } = contentItem;
    return (
      <p key={`${value}`}>
        {value}
      </p>
    );
  });

  const galleryImages = photoGallery.map(image => ({ src: image.file.url, title: image.title }));
  const timelineData = data.allContentfulTimeline.edges;
  const classes = useStyles();

  return (
    <Layout data={data} location={location}>
      <Paper className="artist-page">
        <ThemeProvider theme={styles}>
          <Box className={artistPageStyles.artistPageWrapper}>
            <Box component="section" className={artistPageStyles.artistInfo}>
              <div className={artistPageStyles.artistImg}>
                <img src={url} alt={title} />
                {/* <Img resolutions={image[0].resolutions} /> */}
              </div>
              <div className={artistPageStyles.artistText}>
                <Typography component="h2" variant="h4">
                  {`${surname} ${name} ${patronymic}`}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="span">
                  {yearsOfLife}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {generalInformation}
                </Typography>
              </div>
            </Box>
            {timelineData && (
              <Box component="section" className={artistPageStyles.artistTimeline}>
                <Typography component="h3" variant="h5">
                  <FormattedMessage id="timelineTitle" />
                </Typography>
                <ArtistTimeline inputData={timelineData} />
              </Box>
            )}
            {works && (
            <Box component="section" className={artistPageStyles.artistBuildings}>
              <Typography component="h3" variant="h5">
                <FormattedMessage id="worksTitle" />
              </Typography>

              <List className={classes.root}>
                {works.map(building => (
                  <ListItem lignitems="flex-start" key={`${building}-key`}>
                    <ListItemIcon>
                      <HomeIcon className={classes.icon} color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={(
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {building}
                          </Typography>
                        </>
)}
                    />
                  </ListItem>
                ))}
              </List>

            </Box>
            )}
            {videoTag && (
            <Box component="section" className={artistPageStyles.artistVideo}>
              <Typography component="h3" variant="h5">
                <FormattedMessage id="videoTitle" />
              </Typography>
              <Video url={videoTag} />
            </Box>
            )}
            {galleryImages && (
            <Box component="section" className={artistPageStyles.artistGallery}>
              <Typography component="h3" variant="h5">
                <FormattedMessage id="galleryTitle" />
              </Typography>
              <Gallery images={galleryImages} />
            </Box>
            )}
            {geoTag && (
            <Box component="section" className={artistPageStyles.artistMap}>
              <Typography component="h3" variant="h5">
                <FormattedMessage id="mapTitle" />
              </Typography>
              <Geowidget url={geoTag} />
            </Box>
            )}
          </Box>
        </ThemeProvider>
      </Paper>
    </Layout>
  );
};

ArtistPageTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulArchitectPage: PropTypes.object,
    allContentfulTimeline: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistPageTemplate;

export const pageQuery = graphql`
    query artistQuery($slug: String!, $lang: String!) {
        site {
            siteMetadata {
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
        allContentfulTimeline(filter: {lang: {eq: $lang}, title: {eq: $slug}}, sort: {fields: order}) {
          edges {
            node {
              date
              description {
                description
              }
              order
            }
          }
        }
        contentfulArchitectPage(slug: { eq: $slug }, lang: { eq: $lang },) {
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
          geoTag {
            geoTag
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
`;
