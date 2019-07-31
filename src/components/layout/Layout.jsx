import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';

import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/de';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import Video from "../video/Video";
import './custom_variables.css';
import layoutStyles from './Layout.module.scss';

addLocaleData([...en, ...de]);

class Layout extends Component {
  constructor(props) {
    super(props);
    const { children, data, location } = this.props;
    const { pathname: url } = location;
    this.children = children;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));

    this.i18nMessages = require(`../../data/messages/${this.langKey}`); // eslint-disable-line
  }

  render() {
    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}
      >
        <Grid className={layoutStyles.container} spacing={3}>
          <Grid item xs={12}>
            <Header langs={this.langsMenu} />
          </Grid>
          <Grid item xs={12}>
            <Paper className={layoutStyles.content}>{this.children}</Paper>
          </Grid>
          <Grid item xs={12}>
            {/*<Footer />*/}
          </Grid>
        </Grid>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
