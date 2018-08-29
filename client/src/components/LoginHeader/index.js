import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { profilePropTypes } from '../../utils/propTypes'
import Button from '../Button'

/** Login display component */
export default class LoginHeaderComponent extends Component {
  handleLogin = (event) => {
    this.props.onLogin()
    event.preventDefault()
  }

  render() {
    const { onLogout, onChangeEmail, onChangePassword, profile, email, password, loading } = this.props

    return (
      <div className="cb-header w-100 top-0 absolute shadow-3 bg-custom-dark-gray pa3 f6 mb5">
        {profile ? (
          <Fragment>
            <div className="fr">
              <span className="mr2">
                Bem vindo, &nbsp; <b className="custom-blue">{profile.userName}</b> !
              </span>
              <Button type="submit" variation="secondary" size="small" onClick={onLogout} isLoading={loading}>
                <span className="upper">Sair</span>
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <form className="fr custom-blue upper" onSubmit={this.handleLogin}>
              <span className="mr2">
                <label className="mr2">Email</label>
                <input className="bg-custom-white custom-gray" value={email} onChange={onChangeEmail} />
              </span>
              <span className="mr2">
                <label className="mr2">Senha</label>
                <input className="bg-custom-white custom-gray" value={password} onChange={onChangePassword} type="password" />
              </span>
              <Button type="submit" variation="secondary" size="small" isLoading={loading}>
                <span className="upper">Entrar</span>
              </Button>
            </form>
          </Fragment>
        )}
      </div>
    )
  }
}

LoginHeaderComponent.propTypes = {
  /** Func to dispatch login on container */
  onLogin: PropTypes.func.isRequired,
  /** Func to dispatch logout on container */
  onLogout: PropTypes.func.isRequired,
  /** Func to dispatch change to the email prop on container */
  onChangeEmail: PropTypes.func.isRequired,
  /** Func to dispatch change to the password prop on container */
  onChangePassword: PropTypes.func.isRequired,
  /** Current logged profile */
  profile: profilePropTypes,
  /** Email in the container state */
  email: PropTypes.string.isRequired,
  /** Password in the container state */
  password: PropTypes.string.isRequired,
  /** Loading status */
  loading: PropTypes.bool.isRequired,
}

