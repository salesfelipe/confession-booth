import React, { Component, Fragment } from 'react'

import LoginHeaderContainer from '../LoginHeader'

import ConfessionFormContainer from '../ConfessionForm'
import FeedContainer from '../Feed'

import { get, fixConfessionsDates } from '../../utils'

/**
 * App main container, responsible for rendering
 * the others containers and share the profile data with them
 * */
class AppContainer extends Component {
  state = { confessions: [], profile: null }

  componentWillMount() {
    get('/api/confession').then(data => this.setState({ confessions: fixConfessionsDates(data) }))
  }

  handleUpdateProfile = (profile) => {
    this.setState({ profile })
  }

  handleCreateConfession = (list) => {
    this.setState({ confessions: fixConfessionsDates(list) })
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
