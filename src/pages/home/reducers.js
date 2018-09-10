import { SET_TOPICS } from './actions'
import { initialState } from './store'

export function reducers (topics = initialState, action) {
  let { type, payload } = action
  switch(type) {
    case SET_TOPICS:
      return setTopics(topics, payload)
    default:
      return topics
  }
}

function setTopics (topics, payload) {
  let { type, items, page } = payload
  if(type === topics.type) {
    return Object.assign({}, {
      type,
      page
    }, {
      items: topics.items.concat(items)
    })
  }
  return Object.assign(payload)
}