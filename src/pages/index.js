import React from "react"
import Header from "../components/Header"
import { graphql } from "gatsby"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges)

  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "avenir",
            }}
            key={frontmatter.path}
          >
            {frontmatter.title}
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout