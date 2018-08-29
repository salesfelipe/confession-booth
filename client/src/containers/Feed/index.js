import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { patch } from '../../utils/http'
import { profilePropTypes, confessionPropTypes } from '../../utils/propTypes'
import FeedComponent from '../../components/Feed'

/** FeedContainer, responsible for handling the action of upvote and downvote */
export default class FeedContainer extends Component {
  handleUpVote = (id) => {
    const { profile, onUpdateConfessions, confessions } = this.props

    patch(`/api/confession/${id}/upvote`, { userName: profile.userName }).then(() => {
      const updatedConfession = confessions.map((item) => {
        if (item._id === id) {
          item.likes += 1
          item.isLiked = true
        }

        return item
      })

      onUpdateConfessions(updatedConfession)
    })
  }

  handleDownVote = (id) => {
    const { profile, onUpdateConfessions, confessions } = this.props

    patch(`/api/confession/${id}/downvote`, { userName: profile.userName }).then(() => {
      const updatedConfession = confessions.map((item) => {
        if (item._id === id) {
          item.likes -= 1
          item.isLiked = false
        }

        return item
      })

      onUpdateConfessions(updatedConfession)
    })
  }

  render() {
    return (
      <FeedComponent
        confessions={this.props.confessions}
        onUpVote={this.handleUpVote}
        onDownVote={this.handleDownVote}
        isLogged={this.props.profile != null}
      />
    )
  }
}

FeedContainer.propTypes = {
  /** User's profile info */
  profile: profilePropTypes,
  /** List of confessions */
  confessions: PropTypes.arrayOf(confessionPropTypes),
  /** Funciton to update the confession list */
  onUpdateConfessions: PropTypes.func.isRequired,
}

