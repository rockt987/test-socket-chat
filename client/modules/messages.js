import Immutable from 'immutable'
import { LOGIN_SUCCESSFUL } from './username'
import { pushMessage } from '../backend-channel'

export const OTHER_JOIN_CHAT = 'OTHER_JOIN_CHAT'
export const OTHER_LEAVE_CHAT = 'OTHER_LEAVE_CHAT'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export const sendMessage = (message) => (dispatch) => pushMessage(message)

export const receiveMessage = ({username, message}) => {
  return {
    type: RECEIVE_MESSAGE,
    username,
    message
  }
}

export const otherLeaveChat = (username) => {
  return {
    type: OTHER_LEAVE_CHAT,
    username
  }
}

export const otherJoinChat = (username) => {
  return {
    type: OTHER_JOIN_CHAT,
    username
  }
}

export default (state = Immutable.List(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return state.push(`Bot: Welcome ${action.username}.`)
    case OTHER_JOIN_CHAT:
      return state.push(`Bot: ${action.username} join channel.`)
    case OTHER_LEAVE_CHAT:
      return state.push(`Bot: ${action.username} left channel.`)
    case RECEIVE_MESSAGE:
      return state.push(`${action.username}: ${action.message}`)
    default:
      return state;
  }
}
