import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={(e) => {
        dispatch(removeExpense({ id }))
      }}
    >
      Remove
    </button>
  </div>
)

// We don't need access to the state so we don't need mapStateToProps
export default connect()(ExpenseListItem)
