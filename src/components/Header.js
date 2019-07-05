import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: avenir;
`

const BlogTitle = styled.h1`
  margin-bottom: 0px;
`

const BlogDescription = styled.p`
  margin-top: 0px;
  opacity: 0.5;
`

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <MainContainer>
      <BlogTitle data-testid="blog-title">{title}</BlogTitle>
      <BlogDescription data-testid="blog-description">
        {description}
      </BlogDescription>
    </MainContainer>
  )
}

const Header = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription {...props} data={data} />}
    />
  )
}

export default Header
