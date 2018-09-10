import { initialState } from './store'
import { FETCH_TOPIC_BY_ID } from './actions'

export function reducers (state = initialState, {type, payload}) {
  switch(type) {
    case FETCH_TOPIC_BY_ID:
      return payload
    default:
      return state
  }
}
