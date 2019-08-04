import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

class NotFoundPage extends React.PureComponent {
  constructor(args) {
    super(args);
    const { data, location } = this.props;
    this.data = data;
    this.location = location;
  }

  render() {
    return (
      <Layout data={this.data} location={this.location}>
        <h2><FormattedMessage id="notFound" /></h2>
      </Layout>
    );
  }
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
export const pageQuery = graphql`
    query NotFoundQuery {
        site{
            siteMetadata{
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
    }
`;
