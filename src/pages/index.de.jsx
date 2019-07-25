import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';

const Product = ({ node }) => (
  <div>
    <Link
      style={{ color: 'inherit', textDecoration: 'none' }}
      to={`/${node.node_locale}/products/${node.contentful_id}/`}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid lightgray',
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.image[0].resolutions.src && (
            <Img
              style={{ margin: 0 }}
              resolutions={node.image[0].resolutions}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.productName.productName}</div>
      </div>
    </Link>
  </div>
);

Product.propTypes = {
  node: PropTypes.object.isRequired, // eslint-disable-line
};

const IndexPage = ({ data, location }) => {
  let deProductEdges = [];
  if (data.german !== null) {
    deProductEdges = data.german.edges;
  }
  return (
    <Layout data={data} location={location}>
      <div style={{ marginBottom: rhythm(2) }}>
        <h3>de</h3>
        {deProductEdges.map(({ node }) => (
          <Product node={node} key={node.id} />
        ))}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default IndexPage;

export const pageQuery = graphql`
  query PageDeQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    german: allContentfulProduct(filter: { node_locale: { eq: "de" } }) {
      edges {
        node {
          id
          contentful_id
          node_locale
          productName {
            productName
          }
          image {
            resolutions(width: 75) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`;
