import React, { Component, Fragment } from 'react'

import './App.css'

import Header from './components/Header'
import ConfessionForm from './components/ConfessionForm'
import ConfessionFeed from './components/ConfessionFeed'

class App extends Component {
  state = { confessions: [], profile: null }

  handleLogin = (info) => {
    if (info.password === '1234' && info.email) {
      this.setState({ profile: { email: info.email, username: 'suricato-seboso' } })
    }
  }

  handleLogout = () => {
    this.setState({ profile: null })
  }

  // getPasswords = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/passwords')
  //     .then(res => res.json())
  //     .then(passwords => this.setState({ passwords }))
  // }

  render() {
    return (
      <Fragment>
        <Header profile={this.state.profile} onLogin={this.handleLogin} onLogout={this.handleLogout} />
        <div className="w-100 pa4">
          <h3 className="f1 tc measure">"Tell me what you did on the past summer ;P"</h3>
        </div>
        <div className="w-50-ns w-100 shadow-3">
          <ConfessionFeed />
        </div>
        <div className="w-30-ns w-100 shadow-3">
          <ConfessionForm />
        </div>
      </Fragment>
    )
  }
}

export default App
