import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import AppContainer from './containers/App'

import './index.css'

library.add(fas)

ReactDOM.render(<AppContainer />, document.getElementById('App'))

