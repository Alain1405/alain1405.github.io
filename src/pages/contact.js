import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
      { modal &&  <Link className="close" to={closeTo}>&#10005;</Link>}

        <h2>Contact Alain</h2>
        <form name="contact" netlify >
          <label>
            Your name
            <input type="text" name="name" placeholder="Your name"/>
          </label>
          <label>
            Your email
            <input type="text" name="_replyto" placeholder="Your email" />
          </label>
          <label>
            Your message
            <textarea name="message" rows="15" cols="5"></textarea>
          </label>

          {/* <!-- your other form fields go here --> */}
          <input type="text" name="_gotcha" style={{display: "none"}} />

          <button type="submit">Send</button>
          
        </form>

        { modal &&  <Link to="/">Go back</Link>}
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
