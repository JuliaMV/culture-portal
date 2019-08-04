/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Search from '../components/search/Search';

const ArtistPage = ({ data, location }) => {
  const searchData = data.allContentfulArchitectPage.edges;
  return (
    <Layout data={data} location={location}>
      <Search searchData={searchData} />
    </Layout>
  );
};

ArtistPage.propTypes = {
  data: PropTypes.shape({
    allContentfulArchitectPage: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistPage;

export const pageQuery = graphql`
  query AboutEnQuery {
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
          surname {
            surname
          }
          generalInfo {
            content {
              content {
                value
              }
            }
          }
          yearsOfLife
          searchKeys
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
    allContentfulTimeline(
      filter: { lang: { eq: "en" } }
      sort: { fields: order }
    ) {
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
