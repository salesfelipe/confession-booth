import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { profilePropTypes, confessionPropTypes } from '../../utils/propTypes'
import FeedComponent from '../../components/Feed'

export default class FeedContainer extends Component {
  render() {
    return (
      <FeedComponent confessions={this.props.confessions} />
    )
  }
}

FeedContainer.propTypes = {
  /** User's profile info */
  profile: profilePropTypes,
  confessions: PropTypes.arrayOf(confessionPropTypes),
}

