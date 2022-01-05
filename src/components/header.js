import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'

// const data = useStaticQuery(graphql`
// query {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `)
const Header = ({ siteTitle }) => (
  <header
    style={{}}
  >
    <div
      style={{
        display: "flex",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0`,
      }}
    >
      <h1 style={{
        margin: 0,
        marginRight: "auto"
      }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle || "Alain Scialoja" }
        </Link>
      </h1>

      {/* <Link
        to="/"
        style={{
          float: "right",
          color: "black",
          textDecoration: `none`,
        }}
      >
        Bio
      </Link>
      <Link
        to="/blog"
        style={{
          float: "right",
          color: "black",
          textDecoration: `none`,
          paddingLeft: `1.5rem`,
        }}
      >
        Blog
      </Link> */}
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
