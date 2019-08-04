import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';

import ArtistCard from '../components/artistcard/ArtistCard';
import Team from '../components/team/Team';
import AboutPortal from '../components/aboutportal/AboutPortal';

import Layout from '../components/layout/Layout';

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
query BeQuery {
  allContentfulArchitectPage(filter: { lang: { eq: "be" } }) {
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
