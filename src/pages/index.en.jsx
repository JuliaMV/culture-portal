/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import { FormattedMessage } from 'react-intl';

import ArtistCard from '../components/artistcard/ArtistCard';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/Layout';
import Team from '../components/team/Team';
import AboutPortal from '../components/aboutportal/AboutPortal';


const IndexPage = ({ data, location }) => {
  // const { pathname: url } = location;
  const currentArtistList = data.allContentfulArchitectPage.edges;
  const numberOfArtists = currentArtistList.length;
  const randomArtistIndex = Math.floor(Math.random() * numberOfArtists);
  return (
    <Layout data={data} location={location}>
      <Paper>
        <AboutPortal />
      </Paper>
      <Paper>
        {/* Author of the day */}
        <h2><FormattedMessage id="AuthorOfDay" /></h2>
        <ArtistCard queryData={currentArtistList[randomArtistIndex]} />
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
query EnQuery {
  allContentfulArchitectPage(filter: { lang: { eq: "en" } }) {
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
  allContentfulTimeline(filter: { lang: { eq: "ru" } }, sort: { fields: order }) {
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
}
`;
