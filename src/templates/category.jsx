import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout/Layout';

const CategoryTemplate = ({ data, location }) => {
  const category = data.contentfulCategory;
  const { title: { title }, product, icon } = category;
  const iconImg = icon.resolutions;
  return (
    <Layout data={data} location={location}>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: rhythm(1 / 2),
          }}
        >
          <Img
            style={{
              height: iconImg.height,
              width: iconImg.width,
              marginRight: rhythm(1 / 2),
            }}
            resolutions={iconImg}
          />
          <h4 style={{ marginBottom: 0 }}>{title}</h4>
        </div>
        <h1>{title}</h1>
        <div>
          <span>Products</span>
          <ul>
            {product
              && product.map(p => (
                <li key={p.contentful_id}>
                  <Link to={`/${p.node_locale}/products/${p.contentful_id}`}>
                    {p.productName.productName}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query categoryQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulCategory(id: { eq: $id }) {
      title {
        title
      }
      icon {
        resolutions(width: 75) {
          base64
          src
          srcSet
          height
          width
        }
      }
      product {
        id
        contentful_id
        node_locale
        productName {
          productName
        }
      }
    }
  }
`;
