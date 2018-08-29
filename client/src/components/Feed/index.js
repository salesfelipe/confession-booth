import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { confessionPropTypes } from '../../utils/propTypes'
import Button from '../Button'

/** FeedComponent to display the list of confessions */
export default class FeedComponent extends Component {
  render() {
    const { isLogged, onDownVote, onUpVote, confessions } = this.props
    return (
      <div className="w-60-ns w-100 mt5 shadow-3">
        <div className="bg-custom-dark-gray pa3 flex flex-wrap">
          {confessions.map((item) => {
            return (
              <div className="w-100 bg-custom-gray mb4 pa3 custom-white" key={item._id}>
                <p>{item.text}</p>
                <div className="mb3 tr custom-blue">
                  {`${item.author || 'anonimous'} - ${item.createdAt.getDate()}/${item.createdAt.getMonth() + 1}/${item.createdAt.getFullYear()}`}
                </div>
                <Button variation="tertiary" icon
                  disabled={!isLogged}
                  onClick={() => {
                    if (item.isLiked) { onDownVote(item._id) } else { onUpVote(item._id) }
                  }}>
                  <label className={item.isLiked && isLogged ? 'custom-blue' : undefined}>
                    {(item.likes > 0) && <Fragment>{item.likes} &nbsp;</Fragment>}  <FontAwesomeIcon icon="heart" />
                  </label>

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
  /** Up vote a confession */
  onUpVote: PropTypes.func.isRequired,
  /** Down vote a confesison */
  onDownVote: PropTypes.func.isRequired,
  /** If the user is logged or not */
  isLogged: PropTypes.bool.isRequired,
}
