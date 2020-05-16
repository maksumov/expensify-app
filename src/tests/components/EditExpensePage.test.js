import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, history, startEditExpense, startRemoveExpense

beforeEach(() => {
  history = { push: jest.fn() }
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      startEditExpense={startEditExpense}
      history={history}
      startRemoveExpense={startRemoveExpense}
    />
  )
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense', () => {
  const updates = { note: 'My new note value' }
  wrapper.find('ExpenseForm').prop('onSubmit')(updates)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, updates)
})

test('should handle startRemoveExpense', () => {
  const id = expenses[1].id
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id })
})
