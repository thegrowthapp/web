import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import errorHandler from './javascripts/middleware/errorHandler'

import reducer from './javascripts/reducers'

const middleware = applyMiddleware(errorHandler, promise(), thunk, logger())

export default createStore(reducer, middleware)
