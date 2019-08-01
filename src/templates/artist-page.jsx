import React from 'react';
import * as PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
// import Img from 'gatsby-image';
// import { rhythm } from '../utils/typography';
import Video from '../components/video/Video';
import Layout from '../components/layout/Layout';
import ArtistTimeline from '../components/artisttimeline/ArtistTimeline';

const artistPageTemplate = ({ data, location }) => {
  const artist = data.contentfulArchitectPage;
  const {
    videoTag: { videoTag },
    surname: { surname },
    name: { name },
    patronymic: { patronymic },
    listOfWorks: {
      content,
    },
  } = artist;
  const works = content.map((contentItem) => {
    const {
      content: [
        {
          value,
        },
      ],
    } = contentItem;
    return (
      <li key={`${value}`}>
        {value}
      </li>
    );
  });
  return (// eslint-disable-line
    <Layout data={data} location={location}>
      <main className="artist-page">
        <div className="wrapper">
          <section className="artist__info">
            <div className="artist__img">
              {/* <Img resolutions={image[0].resolutions} /> */}
            </div>
            <h1>{`${surname} ${name} ${patronymic}`}</h1>
            <span className="artist__date">(99 декабря 9999 - 99 декабря 9999)</span>
            <p className="artist__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              doloremque iste non repudiandae voluptates.
            </p>
          </section>
          <section className="artist__timeline">
            <h2>
              <FormattedMessage id="timelineTitle" />
            </h2>
            <ArtistTimeline inputData={data.allContentfulTimeline.edges} />
          </section>
          <section className="artist__buildings">
            <h2>
              <FormattedMessage id="worksTitle" />
            </h2>
            {/* <Buildings></Buildings> */}
            <ul>
              {works}
            </ul>
          </section>
          <section className="artist__video">
            <h2>
              <FormattedMessage id="videoTitle" />
            </h2>
            <Video url={videoTag} />
          </section>
          <section className="artist__map">
            <h2>
              <FormattedMessage id="mapTitle" />
            </h2>
            {/* <Map></Map> */}
          </section>
          <section className="gallery">
            <h2>
              <FormattedMessage id="galleryTitle" />
            </h2>
            {/* <Gallery></Gallery> */}
          </section>
        </div>
      </main>
    </Layout>
  );
};
artistPageTemplate.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default artistPageTemplate;

export const pageQuery = graphql`
    query artistQuery($slug: String!, $lang: String!) {
        site {
            siteMetadata {
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
        allContentfulTimeline(filter: {lang: {eq: $lang}}, sort: {fields: order}) {
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
        contentfulArchitectPage(slug: { eq: $slug }, lang: { eq: $lang },) {
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
          listOfWorks {
            content {
              content {
                value
              }
            }
          }
        }
    }
`;
