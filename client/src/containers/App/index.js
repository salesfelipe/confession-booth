import React, { Component, Fragment } from 'react'

import LoginHeaderContainer from '../LoginHeader'

import ConfessionFormContainer from '../ConfessionForm'
import FeedContainer from '../Feed'

/**
 * App main container, responsible for rendering
 * the others containers and share the profile data with them
 * */
class AppContainer extends Component {
  state = { confessions: [], profile: null }

  handleUpdateProfile = (profile) => {
    this.setState({ profile })
  }

  handleCreateConfession = (list) => {
    this.setState({ confessions: list })
  }

  render() {
    const { profile, confessions } = this.state

    return (
      <Fragment>
        <LoginHeaderContainer
          profile={profile}
          onUpdateProfile={this.handleUpdateProfile}
        />
        <ConfessionFormContainer profile={profile} onCreateConfession={this.handleCreateConfession} />
        <FeedContainer profile={profile} confessions={confessions} />
      </Fragment>
    )
  }
}

export default AppContainer
