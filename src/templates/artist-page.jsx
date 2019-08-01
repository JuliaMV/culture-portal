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
    yearsOfLife,
    videoTag: { videoTag },
    surname: { surname },
    name: { name },
    patronymic: { patronymic },
    listOfWorks: {
      content,
    },
    generalInfo: {
      content: generalInfo,
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
  const generalInformation = generalInfo.map((contentItem) => {
    const {
      content: [
        {
          value,
        },
      ],
    } = contentItem;
    return (
      <p key={`${value}`}>
        {value}
      </p>
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
            <h2>{`${surname} ${name} ${patronymic}`}</h2>
            <span className="artist__date">{yearsOfLife}</span>
            <div className="artist__description">
              {generalInformation}
            </div>
          </section>
          <section className="artist__timeline">
            <h3>
              <FormattedMessage id="timelineTitle" />
            </h3>
            <ArtistTimeline inputData={data.allContentfulTimeline.edges} />
          </section>
          <section className="artist__buildings">
            <h3>
              <FormattedMessage id="worksTitle" />
            </h3>
            {/* <Buildings></Buildings> */}
            <ul>
              {works}
            </ul>
          </section>
          <section className="artist__video">
            <h3>
              <FormattedMessage id="videoTitle" />
            </h3>
            <Video url={videoTag} />
          </section>
          <section className="artist__map">
            <h3>
              <FormattedMessage id="mapTitle" />
            </h3>
            {/* <Map></Map> */}
          </section>
          <section className="gallery">
            <h3>
              <FormattedMessage id="galleryTitle" />
            </h3>
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
          generalInfo {
            content {
              content {
                value
              }
            }
          }
        }
    }
`;
