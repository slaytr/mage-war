import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import colors from 'tailwindcss/colors'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.trueGray[800],
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: ``,
        height: `60px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
