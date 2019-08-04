import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';

import Layout from '../components/layout/Layout';
import Team from '../components/team/Team';
import AboutPortal from '../components/aboutportal/AboutPortal';

const IndexPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <Paper>
      <AboutPortal />
    </Paper>
    <Paper>
      {/* Author of the day */}
    </Paper>
    <Paper>
      <Team />
    </Paper>
  </Layout>
);


IndexPage.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
query MyQuery {
  allContentfulArchitectPage(filter: {lang: {eq: "be"}}) {
    edges {
      node {
        slug
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
  allContentfulTimeline(filter: {lang: {eq: "be"}}, sort: {fields: order}) {
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
