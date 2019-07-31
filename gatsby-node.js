const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const artistTemplate = path.resolve('./src/templates/artist-page.jsx');
  const res = await graphql(`
    query {
      allContentfulArchitectPage {
          edges {
            node {
              slug
              lang
            }
          }
        }
      }
    `);
  res.data.allContentfulArchitectPage.edges.forEach((edge) => {
    createPage({
      component: artistTemplate,
      path: `${edge.node.lang}/artists/${edge.node.slug}`,
      context: {
        lang: edge.node.lang,
        slug: edge.node.slug,
      },
    });
  });
};
