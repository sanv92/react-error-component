import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from 'reducers'


const createStoreWithMiddleware = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    promise,
  ),
)

export default createStoreWithMiddleware
