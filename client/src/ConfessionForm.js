import React, { Component } from 'react'

export default class ConfessionForm extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    alert(`A name was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form className="w-100 confessions__form bg-custom-gray pa3" onSubmit={this.handleSubmit}>
        <div className="pv3">
          <label className="mr2">Name:</label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
