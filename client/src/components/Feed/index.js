import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { confessionPropTypes } from '../../utils/propTypes'
import Button from '../Button'

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
                <Button variation="tertiary" icon>
                  {item.isLiked ? (
                    <label className="custom-blue">
                      {item.likes} &nbsp;<FontAwesomeIcon icon="heart" />
                    </label>
                  ) : (
                    <Fragment>
                      {item.likes} &nbsp;<FontAwesomeIcon icon="heart" />
                    </Fragment>
                  )}
                </Button>
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
