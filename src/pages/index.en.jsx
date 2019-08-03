import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import IndexContent from '../components/portaldescription/descriptionEn/IndexContentEn';
import OurTeam from '../components/portaldescription/descriptionEn/OurTeamEn';

const IndexPage = ({ data, location }) => {
  const { pathname: url } = location;
  return (
    <Layout data={data} location={location}>
      <IndexContent />
      <OurTeam />
      <Link to={`${url}artists`}>
        К списку архитекторов
      </Link>
    </Layout>
  );
};

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
query EnQuery {
  allContentfulArchitectPage(filter: {lang: {eq: "en"}}) {
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
  allContentfulTimeline(filter: {lang: {eq: "en"}}, sort: {fields: order}) {
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
