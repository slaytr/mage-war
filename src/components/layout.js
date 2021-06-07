import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import colors from 'tailwindcss/colors'

const Layout = ({ children, view }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (view === "units") {
    return (
      <>
        <Header siteTitle="Units" />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `10px`,
            background: colors.trueGray[900],
            width: `100%`,
            height: `calc(100vh - 80px)`
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `10px`,
          background: colors.trueGray[900],
          width: `100%`,
          height: `calc(100vh - 80px)`
        }}
      >
        <main>{children}</main>
        {/*<footer*/}
        {/*  style={{*/}
        {/*    marginTop: `2rem`,*/}
        {/*    background: colors.trueGray['800']*/}
        {/*  }}*/}
        {/*>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.com">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  view: PropTypes.string
}

export default Layout
