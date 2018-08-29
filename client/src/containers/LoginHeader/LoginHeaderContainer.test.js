import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LoginHeaderContainer from './index'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoginHeaderContainer onUpdateProfile={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('does the login', (done) => {
  const profile = null
  const email = 'sales.felipeb@gmail.com'
  const pass = '1234'

  const updateProfile = (newProfile) => {
    expect(newProfile.email).toBe(email)
    expect(newProfile.userName).toBe('suricato-seboso')

    done()
  }

  const componentWrapper = shallow(<LoginHeaderContainer onUpdateProfile={updateProfile} />)

  expect(profile).toBe(null)
  expect(componentWrapper.state('loading')).toBe(false)

  expect(componentWrapper.state('email')).toBe('')
  componentWrapper.instance().handleChangeEmail({ target: { value: email } })
  expect(componentWrapper.state('email')).toBe(email)

  expect(componentWrapper.state('password')).toBe('')
  componentWrapper.instance().handleChangePassword({ target: { value: pass } })
  expect(componentWrapper.state('password')).toBe(pass)

  componentWrapper.instance().handleLogin()
})
