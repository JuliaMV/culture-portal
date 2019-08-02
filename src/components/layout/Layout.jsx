import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';

import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/be';
import 'intl/locale-data/jsonp/ru';
import en from 'react-intl/locale-data/en';
import be from 'react-intl/locale-data/be';
import ru from 'react-intl/locale-data/ru';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import SelectLanguage from '../selectlanguage/SelectLanguage';

import './custom_variables.css';
// @ts-ignore
import layoutStyles from './Layout.module.scss';

addLocaleData([...en, ...be, ...ru]);

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
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>CodeJam-Culture-Portal</title>
            <link href="https://fonts.googleapis.com/css?family=Caveat&display=swap&subset=cyrillic,cyrillic-ext" rel="stylesheet" />
          </Helmet>
          <Grid container className={layoutStyles.container}>
            <SelectLanguage langs={this.langsMenu} />
            <Grid item xs={12}>
              <Header url={this.homeLink} />
            </Grid>
            <Grid item xs={12}>
              <Paper className={layoutStyles.content}>{this.children}</Paper>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
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
