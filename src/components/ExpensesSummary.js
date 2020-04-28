import React from 'react'
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total'
import expensesCount from '../selectors/expenses-count'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
  const total = expensesTotal(props.expenses)
  const count = expensesCount(props.expenses)

  return (
    <div>
      {count > 0 &&
        (count === 1 ? (
          <p>
            Viewing {count} expense totalling {numeral(total / 100).format('$0,0.00')}
          </p>
        ) : (
          <p>
            Viewing {count} expenses totalling {numeral(total / 100).format('$0,0.00')}
          </p>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
