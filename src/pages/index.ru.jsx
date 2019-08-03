import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/Layout';
import Team from '../components/team/Team';
// import IndexContent from '../components/portaldescription/descriptionRu/IndexContentRu';
// import OurTeam from '../components/portaldescription/descriptionRu/OurTeamRu';

const IndexPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <main>
      <section>
        <h2><FormattedMessage id="aboutPortal" /></h2>
      </section>
      <section>
        <h2><FormattedMessage id="ourTeam" /></h2>
        <Team />
      </section>
    </main>
    {/* <IndexContent /> */}
    {/* <OurTeam /> */}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
query RuQuery {
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
