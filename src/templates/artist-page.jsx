import React from 'react';
import * as PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import { rhythm } from '../utils/typography';

import Layout from '../components/layout/Layout';
import ArtistTimeline from '../components/artisttimeline/ArtistTimeline';

const artistPageTemplate = ({ data, location }) =>
  // const artist = data.contentfulProduct;
  // const {
  //   productName: { productName },
  //   productDescription,
  //   price,
  //   image,
  //   brand,
  //   categories,
  // } = artist;
  (// eslint-disable-line
    <Layout data={data} location={location}>
      <main className="artist-page">
        <div className="wrapper">
          <section className="artist__info">
            <div className="artist__img">
              {/* <Img resolutions={image[0].resolutions} /> */}
            </div>
            <h1>artist Name</h1>
            <span className="artist__date">(99 декабря 9999 - 99 декабря 9999)</span>
            <p className="artist__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              doloremque iste non repudiandae voluptates.
            </p>
          </section>
          <section className="artist__timeline">
            <h2>Временная линия</h2>
            <ArtistTimeline />
          </section>
          <section className="artist__buildings">
            <h2>Здания</h2>
            {/* <Buildings></Buildings> */}
          </section>
          <section className="artist__video">
            <h2>Видео</h2>
            {/* <Video></Video> */}
          </section>
          <section className="artist__map">
            <h2>Карта</h2>
            {/* <Map></Map> */}
          </section>
          <section className="gallery">
            <h2>Галлерея</h2>
            {/* <Gallery></Gallery> */}
          </section>
        </div>
      </main>
    </Layout>
  );
artistPageTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default artistPageTemplate;

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
