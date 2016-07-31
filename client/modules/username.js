import { connect } from '../backend-channel'

export const REGISTER_USERNAME = 'REGISTER_USERNAME';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const registerUserName = (username) => (dispatch) => connect(username)


export const loginSuccess = (username) => {
  return {
    type: LOGIN_SUCCESSFUL,
    username
  }
}

export default (state = '', action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return action.username
    default:
      return state;
  }
}
