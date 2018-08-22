import React, { Component, Fragment } from 'react'

import './App.css'
import ConfessionForm from './ConfessionForm'
import ConfessionFeed from './ConfessionFeed'

class App extends Component {
  state = { confessions: [] }

  componentDidMount() {
    //    this.getPasswords()
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
