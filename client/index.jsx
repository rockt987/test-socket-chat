import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import Immutable from 'immutable'
import App from './containers/App'
import Chat from './containers/Chat'
import Register from './containers/Register'
import reducers from './modules'
import * as BackendChannel from './backend-channel'

require('./style.scss')

const initialState = Immutable.fromJS({})
const store = createStore(reducers, initialState,
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS()
  }
})

BackendChannel.init('http://localhost:8081', store)

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route component={App} path="/">
      <IndexRoute component={Register}/>
      <Route component={Chat} path="/chat"/>
    </Route>
  </Router>
</Provider>, document.getElementById('app'))
