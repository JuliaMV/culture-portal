import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';

const ArtistInfo = queryData => (
  <div key={`${queryData.node.personalPhoto.title}-item`}>
    <img src={queryData.node.personalPhoto.file.url} alt={queryData.node.personalPhoto.title} width="140" height="170" />
    <h2>
      <Link to={`be/artists/${queryData.node.slug}`}>
        {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
      </Link>
    </h2>
    <p>{queryData.node.yearsOfLife}</p>
  </div>
);

const ArtistPage = ({ data, location }) => {
  const items = data.allContentfulArchitectPage.edges.map(edge => ArtistInfo(edge));
  return (
    <Layout data={data} location={location}>
      <ul>
        {items}
      </ul>
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
query AboutBeQuery {
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
