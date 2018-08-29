import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LoginHeaderComponent from '../../components/LoginHeader'
import { profilePropTypes } from '../../utils/propTypes'

/** Login container, responsible for handling the login process with the server */
export default class LoginHeaderContainer extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleLogin = () => {
    const { email, password } = this.state

    if (password === '1234' && email) {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({ email: '', password: '', loading: false })
        this.props.onUpdateProfile({ email: email, userName: 'suricato-seboso' })
      }, 1000)
    }
  }

  handleLogout = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
      this.props.onUpdateProfile(null)
    }, 1000)
  }

  render() {
    const { email, password, loading } = this.state
    const { profile } = this.props

    return (
      <LoginHeaderComponent
        email={email}
        password={password}
        loading={loading}
        profile={profile}
        onLogin={this.handleLogin}
        onLogout={this.handleLogout}
        onChangeEmail={this.handleChangeEmail}
        onChangePassword={this.handleChangePassword}
      />
    )
  }
}

LoginHeaderContainer.propTypes = {
  /** User info */
  profile: profilePropTypes,
  /** Function to update the profile state on main container */
  onUpdateProfile: PropTypes.func.isRequired,
}
