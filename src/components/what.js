import React, { Component } from "react"

class What extends Component {
  constructor(props) {
    super(props)
    this.doings = [
      "job",
      "passion",
      "craft",
      "hobby",
      "occupation",
      "vocation",
    ]
    this.delay = 1500
    this.state = { doing: "job", idx: 0 }
  }
  changeDoing() {
    this.setState({
      idx: this.state.idx + 1,
    })
    if (this.state.idx >= this.doings.length) {
      this.setState({
        idx: 0,
      })
    }
    return this.doings[this.state.idx]
  }
  render() {
    return <span>{this.state.doing}</span>
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          doing: this.changeDoing(),
        }),
      this.delay
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

export default What
