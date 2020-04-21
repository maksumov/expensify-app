import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.1'
import 'jest-enzyme'

Enzyme.configure({
  adapter: new Adapter(),
})
