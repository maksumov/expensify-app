import moment from 'moment'

// Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
      const textMatch = !text || expense.description.toLowerCase().indexOf(text.toLowerCase()) !== -1

      // console.log('startDateMatch', startDateMatch, startDate, expense.createdAt)
      // console.log('endDateMatch', endDateMatch, endDate, expense.createdAt)
      // console.log('textMatch', textMatch, text, expense.description)
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      // Sorting by date (recent first)
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? -1 : 1
      }
      // Sorting by amount (biggest first)
      else if (sortBy === 'amount') {
        return b.amount - a.amount
      }
    })
}
