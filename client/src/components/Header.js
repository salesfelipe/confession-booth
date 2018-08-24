import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

/* Header Component with login/logout form */
export default class Header extends Component {
  render() {
    const { onLogin, onLogout, profile } = this.props

    return (
      <div className="cb-header w-100 top-0 absolute shadow-3 bg-custom-dark-gray pa3 f7">
        {profile ? (
          <Fragment>
            <span className="fr">
              Bem vindo, <b className="custom-blue">{profile.username}</b> !
              <button className="bg-custom-gray custom-blue bn pa2 upper ml2" onClick={onLogout}>Sair</button>
            </span>
          </Fragment>
        ) : (
          <Fragment>
            <form className="fr f7 custom-blue upper" onSubmit={onLogin}>
              <span className="mr2">
                <label className="mr2">Email</label>
                <input className="bg-custom-white custom-gray" />
              </span>
              <span className="mr2">
                <label className="mr2">Password</label>
                <input className="bg-custom-white custom-gray" type="password" />
              </span>
              <button className="bg-custom-gray custom-blue bn pa2 upper" type="submit">Login</button>
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
    username: PropTypes.string.isRequired,
  }),
  /** Function to login */
  onLogin: PropTypes.func.isRequired,
  /** Function to logout */
  onLogout: PropTypes.func.isRequired,
}
