import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** ConfessionForm component, displays the form to submit the confession. */
export default class ConfessionFormComponent extends Component {
  handleSubmit = (event) => {
    this.props.onSubmit()
    event.preventDefault()
  }

  handleChange = (event) => {
    this.props.onConfessionChange(event.target.value)
  }

  render() {
    const { userName, confession } = this.props

    const today = new Date()
    const todayString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    return (
      <div className="w-60-ns w-100 mt5 shadow-3">
        <form className="flex items-center confessions__form bg-custom-dark-gray pa3" onSubmit={this.handleSubmit}>
          <div className="w-80 ml-auto mr-auto">
            <h3 className="tc">Tem algo te incomodando?</h3>

            {userName && <div className="mb3">{userName} :</div>}
            <div className="mb3">
              <textarea
                className="confession-form__textarea w-100 bg-custom-gray pa3 b--black-025 custom-blue "
                placeholder="Conta aí, ma!"
                type="text"
                rows="4"
                value={confession}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb3 tr"> {todayString}</div>

            <button
              className="w-100 pointer bg-custom-blue custom-white bn pa2 upper shadow-3"
              type="submit"
            >
             Enviar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

ConfessionFormComponent.propTypes = {
  /** Confession text. */
  confession: PropTypes.string,
  /** Signed in user's name */
  userName: PropTypes.string,
  /** Func to dispatch the confession to the server */
  onSubmit: PropTypes.func.isRequired,
  /** Func to change the confession text in the container state */
  onConfessionChange: PropTypes.func.isRequired,
}
