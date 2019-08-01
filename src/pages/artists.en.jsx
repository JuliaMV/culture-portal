import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';

const Item = queryData => (
  <div>
    <img src={queryData.node.personalPhoto.file.url} alt={queryData.node.personalPhoto.title} width="140" height="170" />
    <h2>
      <Link to={`en/artists/${queryData.node.slug}`}>
        {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
      </Link>
    </h2>
    <p>{queryData.node.yearsOfLife}</p>
  </div>
);

const ArtistPage = ({ data, location }) => {
  const items = data.allContentfulArchitectPage.edges.map(edge => Item(edge));
  return (
    <Layout data={data} location={location}>
      <ul>
        {items}
      </ul>
    </Layout>
  );
};

ArtistPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default ArtistPage;

export const pageQuery = graphql`
query AboutEnQuery {
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
