import React, { Component } from 'react'

import { profilePropTypes } from '../../utils/propTypes'
import ConfessionFormComponent from '../../components/ConfessionForm'
import { post } from '../../utils'

/** ConfessionForm Container, responsible for submitting the confessions to the server */
export default class ConfessionFormContainer extends Component {
  state = {
    confession: '',
  }

  handleChange = (value) => {
    this.setState({ confession: value })
  }

  handleSubmit = () => {
    const { profile } = this.props
    console.log('Confession submitted', this.state.confession)

    const confession = {
      text: this.state.confession,
    }

    if (profile) {
      confession.author = profile.userName
    }

    post('/api/confession', confession).then(() => {
      this.setState({ confession: '' })
    })
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
