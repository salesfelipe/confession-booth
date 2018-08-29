import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppContainer from './index'

Enzyme.configure({ adapter: new Adapter() })

const dummyConfessions = [{ '_id': '5b86070052d06b00149affb3', 'text': 'Juro solenemente nunca fazer nada de bom', 'author': 'suricato-seboso', 'createdAt': '2018-08-29T02:37:52.644Z', 'likes': ['suricato-seboso'] }]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('processes the list of confessions', () => {
  const componentWrapper = shallow(<AppContainer />)

  expect(componentWrapper.state('confessions').length).toBe(0)
  expect(componentWrapper.state('profile')).toBe(null)

  componentWrapper.instance().handleUpdateConfessions(dummyConfessions)

  const result = componentWrapper.state('confessions')

  expect(result.length).toBe(1)

  result.map((confession) => {
    expect(typeof confession.createdAt).toBe('object')
    expect(typeof confession.likes).toBe('number')
    expect(confession.likes).toBe(1)
  })
})
