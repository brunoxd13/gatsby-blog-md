import "jest-dom/extend-expect"
import React from "react"
import { render } from "@testing-library/react"
import { StaticQuery } from "gatsby"

import Header from "../components/Header"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "My Blog",
          description: "This is Bruno's blog",
        },
      },
    })
  )
})

test("Displays the correct title and description", () => {
  const { getByTestId } = render(<Header />)

  expect(getByTestId("blog-title")).toHaveTextContent("My Blog")

  expect(getByTestId("blog-description")).toHaveTextContent(
    "This is Bruno's blog"
  )
})
