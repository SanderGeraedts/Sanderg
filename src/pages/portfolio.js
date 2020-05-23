import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const PortfolioPage = ({ data }) => {
  const { edges: portfolio } = data.allMdx

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Pagina waar ik praat over dingen die ik heb gemaakt."
      />
      <h1>Portfolio</h1>
      <ul>
        {portfolio.map(({ node: post }) => (
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
  query PortfolioQuery {
    allMdx(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { path: { regex: "/portfolio/.*$/" } } }
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

export default PortfolioPage
