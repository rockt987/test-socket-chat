'use strict'

import {loginSuccess} from './modules/username'
import {otherLeaveChat, otherJoinChat, receiveMessage} from './modules/messages'
import { push } from 'react-router-redux'

let _socketUrl = ''
let _store = undefined
let _username = undefined
let _channel = undefined

export const init = (socketUrl, store) => {
  _socketUrl = socketUrl
  _store = store
}

export const connect = (username) => {

  _username = username
  _channel = io.connect(_socketUrl)

  _channel.on('join channel', ({username}) => {
    if (username === _username) {
      _store.dispatch(loginSuccess(username))
      _store.dispatch(push('/chat'))
    }
    else {
      _store.dispatch(otherJoinChat(username))
    }
  })

  _channel.on('left channel', ({username}) => _store.dispatch(otherLeaveChat(username)))

  _channel.on('send message', ({username, message}) => {

    _store.dispatch(receiveMessage({username, message}))
  })

  _channel.emit('join channel', username)
}

export const pushMessage = (msg) => {
  if (!_channel) {
    throw new Error('Channel is not connected')
  }
  _channel.emit('push message', msg)
}
