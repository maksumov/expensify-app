// Higher Order Components (HOC) - A Component that renders another component
// Big advantages of using HOC:
// 1. Reuse code
// 2. Render hijacking
// 3. Prop manipulation
// 4. Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const WithAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info!</p>}</div>
  )
}

// Challenge
// AuthInfo - show Info if user authenticated
//          - or show message 'Please log in'

// const AdminInfo = WithAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details' />, document.getElementById('app'))
