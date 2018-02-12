import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers' // Or wherever you keep your reducers

export default function configureStore(history) {

  // Apply navigation middleware
  const routerHistory = routerMiddleware(history)

  // Middleware for logging redux action to console
  const logger = createLogger({collapsed: true})

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...[thunk, routerHistory, logger])))

  return store
}