/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
// import Img from 'gatsby-image';
// import { rhythm } from '../utils/typography';

import ArtistTimeline from '../components/artisttimeline/ArtistTimeline';
import Gallery from '../components/gallery/Gallery';
import Geowidget from '../components/geowidget/geowidget';
import Layout from '../components/layout/Layout';
import Video from '../components/video/Video';
import { PanelBot, PanelTop } from '../components/navigationPanel';

const ArtistPageTemplate = ({ data, location }) => {
  const artist = data.contentfulArchitectPage;
  const {
    yearsOfLife,
    videoTag: { videoTag },
    geoTag: { geoTag },
    surname: { surname },
    name: { name },
    patronymic: { patronymic },
    listOfWorks: { content },
    generalInfo: { content: generalInfo },
    personalPhoto: {
      file: { url },
      title,
    },
    photoGallery,
  } = artist;

  const works = content.map((contentItem) => {
    const {
      content: [{ value }],
    } = contentItem;
    return <li key={`${value}`}>{value}</li>;
  });

  const generalInformation = generalInfo.map((contentItem) => {
    const {
      content: [{ value }],
    } = contentItem;
    return <p key={`${value}`}>{value}</p>;
  });

  const galleryImages = photoGallery.map((image) => ({
    src: image.file.url,
    title: image.title,
  }));

  return (
    <Layout data={data} location={location}>
      <PanelTop />
      <PanelBot />
      <main className="artist-page">
        <div className="wrapper">
          <section className="artist__info">
            <div className="artist__img">
              <img src={url} alt={title} width="140" height="170" />
              {/* <Img resolutions={image[0].resolutions} /> */}
            </div>
            <h2>{`${surname} ${name} ${patronymic}`}</h2>
            <span className="artist__date">{yearsOfLife}</span>
            <div className="artist__description">{generalInformation}</div>
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
            <ul>{works}</ul>
          </section>
          <section className="artist__video">
            <h3>
              <FormattedMessage id="videoTitle" />
            </h3>
            <Video url={videoTag} />
          </section>
          <section className="gallery">
            <h3>
              <FormattedMessage id="galleryTitle" />
            </h3>
            <Gallery images={galleryImages} />
          </section>
          <section className="artist__map">
            <h3>
              <FormattedMessage id="mapTitle" />
            </h3>
            <Geowidget url={geoTag} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

ArtistPageTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulArchitectPage: PropTypes.object,
    allContentfulTimeline: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistPageTemplate;

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
    allContentfulTimeline(
      filter: { lang: { eq: $lang } }
      sort: { fields: order }
    ) {
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
    contentfulArchitectPage(slug: { eq: $slug }, lang: { eq: $lang }) {
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
      geoTag {
        geoTag
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
