import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/layout/Layout';
import Team from '../components/team/Team';
// import IndexContent from '../components/portaldescription/descriptionBe/IndexContentBe';
// import OurTeam from '../components/portaldescription/descriptionBe/OurTeamBe';

const IndexPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <>
      <section>
        <h2><FormattedMessage id="aboutPortal" /></h2>
        <p><FormattedMessage id="aboutPortalText1" /></p>
        <p><FormattedMessage id="aboutPortalText2" /></p>
      </section>
      <section>
        {/* Author of the day */}
      </section>
      <section>
        <h2><FormattedMessage id="ourTeam" /></h2>
        <Team />
      </section>
    </>
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
query MyQuery {
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
