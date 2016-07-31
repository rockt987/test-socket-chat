import {connect} from 'react-redux'
import ChatPage from '../components/ChatPage'
import { sendMessage } from '../modules/messages'

const mapStateToProps = (state) => {
  return {
    messages: state.get('messages').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    onSubmitMessage: (msg) => dispatch(sendMessage(msg))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ChatPage)
