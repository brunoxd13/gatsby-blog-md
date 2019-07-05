import React from "react"
import Header from "../components/Header"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
`

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <Header />

      <PostList>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div style={{ marginBottom: "1rem" }} key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          )
        })}
        <>
          <Link to={"/tags"}>Browse by tags</Link>
        </>
      </PostList>
    </>
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
