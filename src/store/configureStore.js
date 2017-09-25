import {applyMiddleware, compose, createStore} from 'redux'
import combinedReducers from './combinedReducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware)
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore() {
  return createStoreWithMiddleware(combinedReducers)
}
