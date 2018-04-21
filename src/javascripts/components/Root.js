import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'
import CidrCalcrator from '../components/CidrCalcrator'

export default class Root extends Component {
  constructor (props) {
    super(props)

    const middlewares = [thunk]

    if (process.env.NODE_ENV === 'development') {
      const logger = createLogger()
      middlewares.push(logger)
    }

    this.store = createStore(
      reducers, {}, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  }

  render () {
    return (
      <Provider store={this.store}>
        <CidrCalcrator />
      </Provider>
    )
  }
}
