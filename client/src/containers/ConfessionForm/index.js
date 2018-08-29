import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { profilePropTypes } from '../../utils/propTypes'
import ConfessionFormComponent from '../../components/ConfessionForm'
import { post } from '../../utils/http'

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

    const confession = {
      text: this.state.confession,
    }

    if (profile) {
      confession.author = profile.userName
    }

    post('/api/confession', confession).then((confessions) => {
      this.setState({ confession: '' })
      this.props.onUpdateConfessions(confessions)
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
  /** Funciton to update the confession list */
  onUpdateConfessions: PropTypes.func.isRequired,
}
