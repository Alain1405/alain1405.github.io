/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"

import "./layout.css"

import Helmet from "react-helmet"

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
          <div className="copyright">© {new Date().getFullYear()}</div>

          <Helmet>
            <script src="https://formspree.io/js/formbutton-v1.min.js"></script>

            <script>
              {`
              window.formbutton = window.formbutton || function() {
                (formbutton.q = formbutton.q || []).push(arguments)
              };
              
              formbutton("create", {
                  action: "https://formspree.io/f/mayopjgb",
                  title: "Contact Alain",
                  fields: [
                      {
                          type: "text",
                          label: "Full name:",
                          name: "name",
                          required: true,
                          placeholder: ""
                      },{
                          type: "email",
                          label: "Email:",
                          name: "email",
                          required: true,
                          placeholder: "your@email.com"
                      },
                      {
                          type: "textarea",
                          label: "Message:",
                          name: "message",
                          placeholder: "",
                      },
                      {
                          type: "submit"
                      }
                  ],
                  styles: {
                      title: {
                          backgroundColor: "gray"
                      },
                      button: {
                          backgroundColor: "gray"
                      }
                  }
              });
              `}
            </script>  
            </Helmet>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
