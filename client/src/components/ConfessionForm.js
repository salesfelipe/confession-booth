import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ConfessionForm extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    const text = event.target.value

    if(text)
      this.props.onConfessionSubmit(event.target.value)
      
    event.preventDefault()
  }

  render() {
    const today = new Date()

    const todayString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    return (
      <form className="flex items-center confessions__form bg-custom-dark-gray pa3" onSubmit={this.handleSubmit}>
        <div className="w-80 ml-auto mr-auto">
          <h3 className="tc">Tem algo te incomodando?</h3>
          
          {this.props.userName && <div className="mb3">{this.props.userName} :</div>}
          <div className="mb3">
            <textarea className="confession-form__textarea w-100 bg-custom-gray pa3 b--black-025 custom-blue " rows="4" placeholder="Conta aí!" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="mb3 tr"> {todayString}</div>

          <button className="w-100 pointer bg-custom-blue custom-white bn pa2 upper shadow-3" type="submit">Enviar</button>
         </div>
      </form>
    )
  }
}

ConfessionForm.propTypes = {
  userName: PropTypes.string,
  onConfessionSubmit: PropTypes.func.isRequired,
}