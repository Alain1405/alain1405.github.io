import React from "react"

import Layout from "../components/layout"
import MeImage from "../components/me_image"
import What from "../components/what"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alain Scialoja" />
    <div className="col-md-6">
      <h1>Hi people</h1>
      <p>
        Building tech is my <What></What>
      </p>
      <h2>Currently</h2>
      <h3>
        VP of Engineering @{" "}
        <a href="https://reustle.co/">Reustle LLC</a>
      </h3>
      <p>Building great software</p>
      <h2>Of note</h2>
      <h3>
        VP of Engineering @ {" "}
        <a href="https://infarm.com">Infarm</a> - Berlin
      </h3>
      <p>Living the urban farming revolution</p>
      <h3>
        CTO @ {" "}
        <a href="https://www.bumbeelabs.com/">BumbeeLabs</a> - Stockholn
      </h3>
      <p>Pioneering footfall analytics</p>

    </div>
    <div className="col-md-6">
      <MeImage/>
    </div>
  </Layout>
)

export default IndexPage
