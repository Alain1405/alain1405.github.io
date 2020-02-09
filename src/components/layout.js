/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `3rem 1.0875rem 1.45rem`,
        }}
      >
        <main className="row">{children}</main>
        <footer>
          <Link className="contact"
            to="/contact"
            state={{
              modal: true,
            }}
          >
            <button>Contact me</button>
          </Link>
          <div className="copyright">© {new Date().getFullYear()}</div>
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
