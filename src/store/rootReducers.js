import { combineReducers } from 'redux'
import { reducers as topics } from '../pages/home/reducers'
import { reducers as viewedTopic } from '../pages/topic/reducers'

export default combineReducers({
  topics,
  viewedTopic
})
