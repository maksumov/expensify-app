import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const text = 'text'
  wrapper.find('input').simulate('change', {
    target: {
      value: text,
    },
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test('should sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date',
    },
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
  const startDate = altFilters.startDate
  const endDate = altFilters.endDate
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
