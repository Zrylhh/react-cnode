import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './rootReducers'
import { initialState as topics} from '../pages/home/store'
import { initialState as viewedTopic } from '../pages/topic/store'

const initialState = {
  topics,
  viewedTopic
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
