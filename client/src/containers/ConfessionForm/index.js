import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { profilePropTypes } from '../../utils/propTypes'
import ConfessionFormComponent from '../../components/ConfessionForm'
import { post } from '../../utils/http'

/** ConfessionForm Container, responsible for submitting the confessions to the server */
export default class ConfessionFormContainer extends Component {
  state = {
    confession: '',
    loading: false,
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

    this.setState({ loading: true })
    post('/api/confession', confession).then((confessions) => {
      this.setState({ confession: '', loading: false })
      this.props.onUpdateConfessions(confessions)
    })
  }

  render() {
    const { profile } = this.props
    const { loading, confession } = this.state

    const userName = profile && profile.userName

    return (
      <ConfessionFormComponent
        userName={userName}
        loading={loading}
        confession={confession}
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
