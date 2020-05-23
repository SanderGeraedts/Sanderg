import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const PostsPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Posts" description="Pagina waar ik praat over dingen." />
      <h1>Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.path}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsQuery {
    allMdx(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { path: { regex: "/posts/.*$/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            description
            date
          }
        }
      }
    }
  }
`

export default PostsPage
