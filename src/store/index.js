import reducers from './rootReducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, compose, createStore } from 'redux'
import { initialState as topics} from '../pages/home/store';

const initialState = {
  topics
}

const middlewares = [thunk, createLogger()]
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store
