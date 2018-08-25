import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ConfessionFeed extends Component {
  render() {
    const { confessions } = this.props

    return (
      <div className="w-100 confessions__feed bg-custom-dark-gray pa3 flex">
        {confessions.map((item) => {
          return (
            <div className="w-100 bg-custom-gray pa3 custom-white">
              <p>{item.text}</p>
              
              <div className="mb3 tr custom-blue"> 
                {`${item.author} - ${item.date.getDate()}/${item.date.getMonth() + 1}/${item.date.getFullYear()}`}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

ConfessionFeed.propTypes = {
  confessions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired
}

