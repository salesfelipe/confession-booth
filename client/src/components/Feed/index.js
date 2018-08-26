import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { confessionPropTypes } from '../../containers/App/propTypes'

/** FeedComponent to display the list of confessions */
export default class FeedComponent extends Component {
  render() {
    return (
      <div className="w-60-ns w-100 mt5 shadow-3">
        <div className="bg-custom-dark-gray pa3 flex">
          {this.props.confessions.map((item) => {
            return (
              <div className="w-100 bg-custom-gray pa3 custom-white" key={item.id}>
                <p>{item.text}</p>
                <div className="mb3 tr custom-blue">
                  {`${item.author} - ${item.createdAt.getDate()}/${item.createdAt.getMonth() + 1}/${item.createdAt.getFullYear()}`}
                </div>
                <button className="bg-custom-dark-gray pointer custom-white bn ph3 pv2  upper ml2">
                  <FontAwesomeIcon icon="heart" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

FeedComponent.propTypes = {
  /** List of confessions to be displayed */
  confessions: PropTypes.arrayOf(
    confessionPropTypes
  ).isRequired,
}
