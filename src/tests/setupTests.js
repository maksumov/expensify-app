import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.1'
import 'jest-enzyme'
import DotEnv from 'dotenv'

DotEnv.config({ path: '.env.test' })

Enzyme.configure({
  adapter: new Adapter(),
})
