import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should correctly render if no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render with many expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})
