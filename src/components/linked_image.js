import React, { Component } from "react"

class LinkedImg extends Component {
  render() {
    return (
      <a
        style={{
          display: "inline-block",
        }}
        href={this.props.url}
      >
        <img
          style={{
            height: `1rem`,
            verticalAlign: "text-top",
          }}
          src={this.props.img}
        ></img>
      </a>
    )
  }
}

export default LinkedImg
