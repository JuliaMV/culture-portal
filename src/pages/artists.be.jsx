/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const Item = queryData => (
  <div>
    <img src={queryData.node.personalPhoto.file.url} alt={queryData.node.personalPhoto.title} width="140" height="170" />
    <h2>{`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}</h2>
    <p>{queryData.node.yearsOfLife}</p>
    <a href={queryData.node.videoTag.videoTag} target="_blank" rel="noopener noreferrer">Youtube Video</a>
  </div>
);

const IndexPage = ({ data, location }) => {
  const items = data.allContentfulArchitectPage.edges.map(edge => Item(edge));
  const imagesList = data.allContentfulArchitectPage.edges.map((edge) => {
    const images = edge.node.photoGallery.map(currImg => (
      <li>
        <img src={currImg.file.url} alt={currImg.title} width="50" height="50" />
      </li>
    ));
    return (
      <ul>
        {images}
      </ul>
    );
  });
  const timeline = data.allContentfulTimeline.edges.map(edge => (
    <li>
      <p>
        {`${edge.node.date} - ${edge.node.description.description}`}
      </p>
    </li>
  ));
  return (
    <Layout data={data} location={location}>
      <ul>
        {items}
      </ul>
      <ul>
        {timeline}
      </ul>
      {imagesList}
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
