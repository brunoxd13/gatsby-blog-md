const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPost.js")
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        posts.map(({ node }, index) => {
          const path = node.frontmatter.path

          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next:
                posts.length - 1 === undefined ? null : posts[index + 1].node,
            },
          })

          resolve()
        })
      })
    )
  })
}
