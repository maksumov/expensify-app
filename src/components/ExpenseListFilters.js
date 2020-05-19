import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onTextChange = (e) => this.props.setTextFilter(e.target.value)
  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount()
    } else if (e.target.value === 'date') {
      this.props.sortByDate()
    }
  }

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              placeholder='Seacrh expenses'
              type='text'
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className='input-group__item'>
            <select className='select' value={this.props.filters.sortBy} onChange={this.onSortChange}>
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId='start_date'
              endDate={this.props.filters.endDate}
              endDateId='end_date'
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              displayFormat='DD.MM.YYYY'
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
