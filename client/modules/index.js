import routing from './route'
import username from './username'
import messages from './messages'
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'

export default combineReducers({
  username,
  messages,
  routing
})
