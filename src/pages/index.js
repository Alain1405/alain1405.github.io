import React from "react"

import Layout from "../components/layout"
import MeImage from "../components/me_image"
import What from "../components/what"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alain Scialoja" />
    <div className="col-md-6">
      <h1>Alain Scialoja</h1>
      <p className="headline">
        Building <strong>technology</strong> is my <What></What>.
      </p>
      <h2>Currently</h2>
      <h3>
        VP of Engineering @ <a href="https://reustle.co/">Reustle LLC</a> -
        Remote
      </h3>
      <p>
        Building great software, globally. Ensuring the success of multiple,
        multifaceted software projects. Providing agile and tech leadership
        training to clients.
      </p>
      <h2>Of note</h2>
      <h3>
        VP of Engineering @ <a href="https://infarm.com">Infarm</a> - Berlin
      </h3>
      <p>
        I designed and directed the development of Infarm's Urban Farming
        platform, building a lean and successful team of multidisciplinary
        talents from scratch, across hardware and software, leading to a
        successful series A funding.
      </p>
      <h3>
        CTO @ <a href="https://www.bumbeelabs.com/">BumbeeLabs</a> - Stockholm
      </h3>
      <p>
        Pioneered footfall analytics and user flow acquisition and processing in
        outdoor environments.
      </p>
    </div>
    <div className="col-md-6">
      <MeImage />
    </div>
  </Layout>
)

export default IndexPage
