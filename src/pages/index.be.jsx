/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/Layout';

const IndexPage = ({ data, location }) => {
  const { pathname: url } = location;
  return (
    <Layout data={data} location={location}>
      <Link to={`${url}artists`}>
        Да спісу архітэктараў
      </Link>
    </Layout>
  );
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
