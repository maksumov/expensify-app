import moment from 'moment'

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
}

export { filters, altFilters }
