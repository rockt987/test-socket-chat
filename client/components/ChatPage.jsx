'use strict'

import React, {PropTypes} from 'react'
import _ from 'lodash'
import './chatpage.scss'

class ChatPage extends React.Component {

  constructor(props) {
    super(props)
    this.onSendClick = this.onSendClick.bind(this)
  }

  onSendClick (e) {
    const msgBox = this.refs.msgbox
    if (msgBox.value) {
      this.props.onSubmitMessage(msgBox.value)
      msgBox.value = ''
    }
  }

  renderMessages () {

    let keyId = 0
    const messages = _.map(this.props.messages, (msg) => {
      return (
        <li key={keyId++} >{msg}</li>
      )
    })
    return (
      <ul className="messages">
        {messages}
      </ul>
    )
  }

  renderChatBox () {
    return (
      <div className='messagebox'>
        <input ref='msgbox' type='text'/><button onClick= {this.onSendClick}>Send</button>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderMessages()}
        {this.renderChatBox()}
      </div>
    )
  }
}


ChatPage.propTypes = {
  onSubmitMessage: PropTypes.func,
  messages: PropTypes.array
}

ChatPage.displayName = 'ChatPage'
export default ChatPage
