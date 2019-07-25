import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { rhythm } from '../utils/typography';

import Layout from '../components/layout';

const ProductTemplate = ({ data, location }) => {
  const product = data.contentfulProduct;
  const {
    productName: { productName },
    productDescription,
    price,
    image,
    brand,
    categories,
  } = product;
  return (
    <Layout data={data} location={location}>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Img resolutions={image[0].resolutions} />
          <h4>{productName}</h4>
        </div>
        <h1>{productName}</h1>
        <h4>
          Made by
          {brand.companyName.companyName}
        </h4>
        <div>
          <span>
            Price: $
            {price}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription.childMarkdownRemark.html,
            }}
          />
          <div>
            <span>See other: </span>
            <ul>
              {categories.map(category => (
                <li key={`${category.contentful_id}-item`}>
                  <Link key={category.contentful_id} to={`/${category.node_locale}/categories/${category.contentful_id}`}>
                    {category.title.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ProductTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default ProductTemplate;

export const pageQuery = graphql`
  query productQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulProduct(id: { eq: $id }) {
      productName {
        productName
      }
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      price
      image {
        resolutions(width: 50, height: 50) {
          base64
          src
          srcSet
          height
          width
        }
      }
      brand {
        companyName {
          companyName
        }
      }
      categories {
        id
        contentful_id
        node_locale
        title {
          title
        }
      }
    }
  }
`;
