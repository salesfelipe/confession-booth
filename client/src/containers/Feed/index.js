import React, { Component } from 'react'

import { profilePropTypes } from '../App/propTypes'
import FeedComponent from '../../components/Feed'

export default class FeedContainer extends Component {
  state = {
    // confessions: [],
    confessions: [
      {
        id: 'ahdush123231231',
        createdAt: new Date(),
        text: 'Hoje eu usei merge em vez de rebase e fiz um splash pra disfarçar... :/',
        likes: 1,
        author: 'suricato-seboso',
        isLiked: true,
      },
    ],
  }

  render() {
    return (
      <FeedComponent confessions={this.state.confessions} />
    )
  }
}

FeedContainer.propTypes = {
  /** User's profile info */
  profile: profilePropTypes,
}

