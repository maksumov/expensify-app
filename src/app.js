import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'Water bill', amount: 2200 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 1200 }))
store.dispatch(addExpense({ description: 'Rent', amount: 122320, createdAt: 1000 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
