import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}-{moment(createdAt).format('DD.MM.YYYY')}
    </p>
  </div>
)

// We don't need access to the state so we don't need mapStateToProps
export default ExpenseListItem
