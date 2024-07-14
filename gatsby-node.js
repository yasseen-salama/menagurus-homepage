const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              title
              date
              description
              featuredpost
              featuredimage {
                childImageSharp {
                  gatsbyImageData(width: 1200, quality: 90, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/${edge.node.frontmatter.templateKey}.js`),
        context: {
          id,
        },
      });
    });

    let tags = [];
    posts.forEach(edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    tags = _.uniq(tags);

    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;
      createPage({
        path: tagPath,
        component: path.resolve('src/templates/tags.js'),
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemarkFrontmatter {
      tags: [String]
      templateKey: String
      title: String
      date: Date @dateformat
      description: String
      featuredpost: Boolean
      featuredimage: File @fileByRelativePath
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
      fields: Fields
    }

    type Fields {
      slug: String
    }
  `);
};
