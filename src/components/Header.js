import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink exact to='/' activeClassName='is-active'>
        Go home
      </NavLink>
      {' | '}
      <NavLink to='/create' activeClassName='is-active'>
        Add Expense
      </NavLink>
      {' | '}
      <NavLink to='/help' activeClassName='is-active'>
        Help
      </NavLink>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(Header)
