// Expenses Reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter((item) => item.id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((item) => {
        if (item.id !== action.id) return item
        // else return Object.assign({}, item, action.updates);
        else return { ...item, ...action.updates }
      })
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state
  }
}
