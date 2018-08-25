import React, { Component, Fragment } from 'react'

import './App.css'

import Header from './components/Header'
import ConfessionForm from './components/ConfessionForm'
import ConfessionFeed from './components/ConfessionFeed'

class App extends Component {
  // state = { confessions: [], profile: null }
  state = { confessions: [], profile: {email: 'user@email.com', userName: 'suricato-seboso'} }
  
  handleLogin = (info) => {
    let result = false

    if (info.password === '1234' && info.email) {
      this.setState({ profile: { email: info.email, userName: 'suricato-seboso' } })
      result = true
    }

    return result
  }

  handleConfessionSubmit = (text) => {
  }

  handleLogout = () => {
    this.setState({ profile: null })
  }

  render() {
    const { profile } = this.state

    const userName = profile && profile.userName

    return (
      <Fragment>
        <Header profile={this.state.profile} onLogin={this.handleLogin} onLogout={this.handleLogout} />
        <div className="w-100 pa4">
          <h1 className="tc measure">Judge no one ;P</h1>
        </div>
        <div className="w-60-ns w-100">
          <div className="w-100 shadow-3 mb4">
            <ConfessionForm userName={userName} onConfessionSubmit={this.handleConfessionSubmit}/>
          </div>
          <div className="shadow-3">
            <ConfessionFeed />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
