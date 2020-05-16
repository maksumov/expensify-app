import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'

test('should render LoginPage component', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})
