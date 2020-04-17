import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// moment.locale('ru')
// const now = moment()
// console.log(now.format('DD.MM.YYYY'))

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    focused: false,
    error: '',
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
      console.log(createdAt)
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
      console.log('submitted!')
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
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
            placeholder='Add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add expense</button>
        </form>
      </div>
    )
  }
}
