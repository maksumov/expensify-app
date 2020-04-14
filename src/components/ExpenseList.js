import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.map((item, key) => (
      <ExpenseListItem key={key} {...item} />
    ))}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ExpenseList)
