import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
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
    </div>
  </header>
)

export default Header
