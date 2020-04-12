// Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
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
