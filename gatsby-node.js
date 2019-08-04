const path = require('path');

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const artistTemplate = path.resolve('./src/templates/artist-page.jsx');
    resolve(
      graphql(
        `query {
          allContentfulArchitectPage {
              edges {
                node {
                  slug
                  lang
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulArchitectPage.edges.forEach((edge) => {
          createPage({
            component: artistTemplate,
            path: `${edge.node.lang}/artists/${edge.node.slug}`,
            context: {
              lang: edge.node.lang,
              slug: edge.node.slug,
            },
          });
        });
      }),
    );
  });
};
