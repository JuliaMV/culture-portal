import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import ArtistCard from '../components/artistcard/ArtistCard';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/Layout';

const IndexPage = ({ data, location }) => {
  const { pathname: url } = location;
  const currentArtistList = data.allContentfulArchitectPage.edges;
  const numberOfArtists = currentArtistList.length;
  const randomArtistIndex = Math.floor(Math.random() * numberOfArtists);
  return (
    <Layout data={data} location={location}>
      <Link to={`${url}artists`}>К списку архитекторов</Link>
      <ArtistCard queryData={currentArtistList[randomArtistIndex]} />
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
    allContentfulArchitectPage(filter: { lang: { eq: "ru" } }) {
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
