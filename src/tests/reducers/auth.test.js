import authReducer from '../../reducers/auth'

test('should login', () => {
  const uid = '112aqd'
  const action = {
    type: 'LOGIN',
    uid,
  }
  const state = authReducer(undefined, action)
  expect(state).toEqual({ uid })
})

test('should logout', () => {
  const state = {
    uid: '123qass',
  }
  const action = {
    type: 'LOGOUT',
  }
  const reducedState = authReducer(state, action)
  expect(reducedState).toEqual({})
})
