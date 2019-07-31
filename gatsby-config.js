const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: 'Gatsby with Contentful',
    languages,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'y51wy5p6m1fg',
        accessToken: 'czAj0HaJEGR5Ru5plyLdMhKgkGBFMWDJF1bs7Hmyr7w',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-sass',
  ],
};
