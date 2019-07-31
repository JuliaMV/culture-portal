/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout/Layout';

const Item = queryData => (
  <div>
    <img src={queryData.node.personalPhoto.file.url} alt={queryData.node.personalPhoto.title} width="140" height="170" />
    <h2>
      <Link to={`ru/artists/${queryData.node.slug}`}>
        {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
      </Link>
    </h2>
    <p>{queryData.node.yearsOfLife}</p>
    <a href={queryData.node.videoTag.videoTag} target="_blank" rel="noopener noreferrer">Youtube Video</a>
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
query RuArtistQuery {
  allContentfulArchitectPage(filter: {lang: {eq: "ru"}}) {
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
  allContentfulTimeline(filter: {lang: {eq: "ru"}}, sort: {fields: order}) {
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