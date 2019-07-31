/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
// import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const Item = queryData => (
  <div>
    <img src={queryData.node.personalPhoto.file.url} alt={queryData.node.personalPhoto.title} width="140" height="170" />
    <h2>
      <Link to={`be/artists/${queryData.node.slug}`}>
        {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
      </Link>
    </h2>
    <p>{queryData.node.yearsOfLife}</p>
  </div>
);

const IndexPage = ({ data, location }) => {
  const items = data.allContentfulArchitectPage.edges.map(edge => Item(edge));
  return (
    <Layout data={data} location={location}>
      <ul>
        {items}
      </ul>
    </Layout>
  );
};

export default IndexPage;

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

/* IndexPage.propTypes = {
    data: PropTypes.shape({
      site: PropTypes.object,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
  }; */
