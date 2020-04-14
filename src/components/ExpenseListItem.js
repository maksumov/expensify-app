import React from 'react'

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.description}</h3>
    {props.amount},{props.createdAt}
  </div>
)

export default ExpenseListItem
