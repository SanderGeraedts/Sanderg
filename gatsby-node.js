const path = require("path")

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions

  if (page.context.frontmatter && page.context.frontmatter.path !== page.path) {
    deletePage(page)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    if (node.frontmatter.path) {
      createPage({
        // This is the slug you created before
        path: node.frontmatter.path,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/mdx-layout.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
    }
  })
}
