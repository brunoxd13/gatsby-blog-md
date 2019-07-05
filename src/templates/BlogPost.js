import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Title = styled.h1`
  font-family: avenir;
`

const PostContainer = styled.div`
  font-family: avenir;
`
const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <>
      <Title>{title}</Title>
      <PostContainer>
        <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />

        {next && <Link to={next.frontmatter.path}>Next</Link>}
        {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
      </PostContainer>
    </>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
