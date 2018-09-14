import { combineReducers } from 'redux'
import { reducers as topics } from '../pages/home/reducers'
import { reducers as viewedTopic } from '../pages/topic/reducers'
import { reducers as viewedUser } from '../pages/user/reducers'
import { reducers as user } from '../pages/login/reducers'
import { reducers as showLoading } from './reducers'

export default combineReducers({
  topics,
  viewedTopic,
  viewedUser,
  user,
  showLoading: showLoading
})
