import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h2 className='page-header__title'>Edit Expense</h2>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className='button button--secondary' onClick={this.onClick}>
            Remove Expense
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id })),
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
