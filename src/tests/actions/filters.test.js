import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(1000))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(1000),
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(1000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(1000),
  })
})

// setTextFilter
test('should generate set text filter action object with provided values', () => {
  const action = setTextFilter('rent')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent',
  })
})

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  })
})

// sortByAmount
test('should generate sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

// sortByDate
test('should generate sort by date action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
})
