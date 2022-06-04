import React from "react"

import Layout from "../components/layout"
import MeImage from "../components/me_image"
import What from "../components/what"
import Seo from "../components/seo"
import { Grid } from 'theme-ui'
import Helmet from "react-helmet"


const IndexPage = () => (
  <Layout>
    <Seo title="Alain Scialoja - Bio" />
        <p className="headline">
          Building <strong>technology</strong> is my <What></What>.
        </p>
    <Grid gap={2} columns={[1, null, 2]}>
      <div>
        {/* <h2>Expertise and domains of interest</h2> */}
        <p>CTO, Technical Product Owner, Technical Lead for IoT, e-learning (Open edX), Blockchain and sustainability.</p>
        <h2>Currently</h2>
        <h3>
          VP of Engineering @ <a href="https://strata.co.jp/" rel="noreferrer" target="_blank">Strata KK</a> -
          Remote
        </h3>
        <p>
          Leading the development of multiple international projects across a variety of domains. Establishing and managing remote teams of experts. Providing agile and tech leadership
          training to clients.
        </p>
        <h2>Of note</h2>
        <h3>
          VP of Engineering @ <a href="https://infarm.com" rel="noreferrer" target="_blank">Infarm</a> - Berlin
        </h3>
        <p>
          I designed and directed the development of Infarm's Urban Farming
          platform, building a lean and successful team of multidisciplinary
          talents from scratch, across hardware and software, leading to a
          successful series A funding.
        </p>
        <h3>
          CTO @ <a href="https://www.bumbeelabs.com/" rel="noreferrer" target="_blank">BumbeeLabs</a> - Stockholm
        </h3>
        <p>
          Pioneered footfall analytics and user flow acquisition and processing in
          outdoor environments.
        </p>
      </div>
      <div>
        <MeImage />
      </div>
    </Grid>
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

  </Layout>

)

export default IndexPage
