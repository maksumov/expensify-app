import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
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
export default connect()(ExpenseListItem)
