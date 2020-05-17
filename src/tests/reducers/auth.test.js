import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
  const uid = '112aqd'
  const action = {
    type: 'LOGIN',
    uid,
  }
  const state = authReducer(undefined, action)
  expect(state.uid).toBe(action.uid)
})

test('should clear uid for logout', () => {
  const state = {
    uid: '123qass',
  }
  const action = {
    type: 'LOGOUT',
  }
  const reducedState = authReducer(state, action)
  expect(reducedState).toEqual({})
})
