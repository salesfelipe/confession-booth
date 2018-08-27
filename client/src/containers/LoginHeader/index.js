import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LoginHeaderComponent from '../../components/LoginHeader'
import { profilePropTypes } from '../../utils/propTypes'

/** Login container, responsible for handling the login process with the server */
export default class LoginHeaderContainer extends Component {
  state = {
    email: '',
    password: '',
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
      this.setState({ email: '', password: '' })
      this.props.onUpdateProfile({ email: email, userName: 'suricato-seboso' })
    }
  }

  handleLogout = () => {
    console.log('login out')
    this.props.onUpdateProfile(null)
  }

  render() {
    const { email, password } = this.state
    return (
      <LoginHeaderComponent
        email={email}
        password={password}
        profile={this.props.profile}
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
