import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

/* Header Component with login/logout form */
export default class Header extends Component {
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

  handleSubmit = (event) => {
    const { email, password } = this.state

    const success = this.props.onLogin({ email, password })

    if (success) { this.setState({ email: '', password: '' }) }

    event.preventDefault()
  }

  render() {
    const { onLogout, profile } = this.props
    const { email, password } = this.state

    return (
      <div className="cb-header w-100 top-0 absolute shadow-3 bg-custom-dark-gray pa3 f7">
        {profile ? (
          <Fragment>
            <span className="fr">
              Bem vindo, <b className="custom-blue">{profile.userName}</b> !
              <button className="bg-custom-gray pointer custom-blue bn pa2 upper ml2" onClick={onLogout}>Sair</button>
            </span>
          </Fragment>
        ) : (
          <Fragment>
            <form className="fr f7 custom-blue upper" onSubmit={this.handleSubmit}>
              <span className="mr2">
                <label className="mr2">Email</label>
                <input className="bg-custom-white custom-gray" value={email} onChange={this.handleChangeEmail} />
              </span>
              <span className="mr2">
                <label className="mr2">Senha</label>
                <input className="bg-custom-white custom-gray" value={password} onChange={this.handleChangePassword} type="password" />
              </span>
              <button className="bg-custom-gray pointer custom-blue bn pa2 upper" type="submit">Entrar</button>
            </form>
          </Fragment>
        )}
      </div>
    )
  }
}

Header.propTypes = {
  /** User info */
  profile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }),
  /** Function to login */
  onLogin: PropTypes.func.isRequired,
  /** Function to logout */
  onLogout: PropTypes.func.isRequired,
}
