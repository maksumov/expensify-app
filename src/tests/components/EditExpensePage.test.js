import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, history, editExpense, removeExpense

beforeEach(() => {
  history = { push: jest.fn() }
  editExpense = jest.fn()
  removeExpense = jest.fn()
  wrapper = shallow(
    <EditExpensePage expense={expenses[1]} editExpense={editExpense} history={history} removeExpense={removeExpense} />
  )
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const updates = { note: 'My new note value' }
  wrapper.find('ExpenseForm').prop('onSubmit')(updates)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, updates)
})

test('should handle removeExpense', () => {
  const id = expenses[1].id
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id })
})
