import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, logout } from '../../actions/auth'

const createMockstore = configureMockStore([thunk])

test('should setup login action object', () => {
  const uid = '12234234'
  const action = login(uid)
  expect(action).toEqual({ type: 'LOGIN', uid })
})

test('should setup logout action object', () => {
  const action = logout()
  expect(action).toEqual({ type: 'LOGOUT' })
})
