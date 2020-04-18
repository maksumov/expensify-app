import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
)

// We don't need access to the state so we don't need mapStateToProps
export default ExpenseListItem
