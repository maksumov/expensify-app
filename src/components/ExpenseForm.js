import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: '',
      editMode: props.expense ? true : false,
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value

    // Clear error state
    // if (this.state.error && description && this.state.amount) {
    //   this.setState(() => ({ error: '' }))
    // }
    this.setState(() => ({ description }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value

    if (amount.match(/^\d*(\d\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))

      // Clear error state
      // if (this.state.error && amount && this.state.description) {
      //   this.setState(() => ({ error: '' }))
      // }
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount.'
      this.setState(() => ({ error: 'Please provide description and amount.' }))
    } else {
      // clear the error
      this.setState(() => ({ error: '' }))

      this.props.onSubmit({
        description: this.state.description,
        amount: Math.round(parseFloat(this.state.amount, 10) * 100),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      })
    }
  }
  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          type='text'
          className='text-input'
          placeholder='Description'
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className='text-input'
          type='text'
          placeholder='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          id='datepicker'
          displayFormat='DD.MM.YYYY'
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className='textarea'
          placeholder='Add a note for your expense (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
          <button className='button'>Save Expense</button>
        </div>
      </form>
    )
  }
}
