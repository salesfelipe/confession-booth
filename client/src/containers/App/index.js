import React, { Component, Fragment } from 'react'

import LoginHeaderContainer from '../LoginHeader'

import ConfessionFormContainer from '../ConfessionForm'
import FeedContainer from '../Feed'

/**
 * App main container, responsible for rendering
 * the others containers and share the profile data with them
 * */
class AppContainer extends Component {
  // state = { confessions: [], profile: null } //empty
  state = {
    profile: {
      email: 'user@email.com',
      userName: 'suricato-seboso',
    },
  } // dummy data

  handleUpdateProfile = (profile) => {
    this.setState({ profile })
  }

  render() {
    const { profile } = this.state

    return (
      <Fragment>
        <LoginHeaderContainer
          profile={profile}
          onUpdateProfile={this.handleUpdateProfile}
        />
        <ConfessionFormContainer profile={profile} />
        <FeedContainer profile={profile} />
      </Fragment>
    )
  }
}

export default AppContainer
