import React, { Component } from 'react'

import { profilePropTypes } from '../../containers/App/propTypes'
import ConfessionFormComponent from '../../components/ConfessionForm'

/** ConfessionForm Container, responsible for submitting the confessions to the server */
export default class ConfessionFormContainer extends Component {
  state = {
    confession: '',
  }

  handleChange = (value) => {
    this.setState({ confession: value })
  }

  handleSubmit = () => {
    console.log('Confession submitted', this.state.confession)
  }

  render() {
    const { profile } = this.props

    const userName = profile && profile.userName

    return (
      <ConfessionFormComponent
        userName={userName}
        confession={this.state.confession}
        onSubmit={this.handleSubmit}
        onConfessionChange={this.handleChange}
      />
    )
  }
}

ConfessionFormContainer.propTypes = {
  /** Current logged profile */
  profile: profilePropTypes,
}
