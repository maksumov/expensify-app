import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboarPage from '../../components/ExpenseDashboardPage'

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboarPage />)
  expect(wrapper).toMatchSnapshot()
})
