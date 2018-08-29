import React, { Component, Fragment } from 'react'

import LoginHeaderContainer from '../LoginHeader'

import ConfessionFormContainer from '../ConfessionForm'
import FeedContainer from '../Feed'

import { processConfessions } from '../../utils'
import { get } from '../../utils/http'

/**
 * App main container, responsible for rendering
 * the others containers and share the profile data with them
 * */
class AppContainer extends Component {
  state = { confessions: [], profile: null }

  componentWillMount() {
    get('/api/confession').then(data => this.handleUpdateConfessions(data))
  }

  handleUpdateProfile = (profile) => {
    this.setState({ profile })
    get('/api/confession').then(data => this.handleUpdateConfessions(data))
  }

  handleUpdateConfessions = (list) => {
    this.setState({ confessions: processConfessions(list) })
  }

  render() {
    const { profile, confessions } = this.state

    return (
      <Fragment>
        <LoginHeaderContainer
          profile={profile}
          onUpdateProfile={this.handleUpdateProfile}
        />
        <ConfessionFormContainer profile={profile} onUpdateConfessions={this.handleUpdateConfessions} />
        <FeedContainer profile={profile} confessions={confessions} onUpdateConfessions={this.handleUpdateConfessions} />
      </Fragment>
    )
  }
}

export default AppContainer
