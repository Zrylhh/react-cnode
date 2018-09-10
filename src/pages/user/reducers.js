import { initialState } from './store'
import { FETCH_USER_BY_LOGINNAME } from './actions'

export function reducers (state = initialState, {type, payload}) {
  switch(type) {
    case FETCH_USER_BY_LOGINNAME:
      return payload
    default:
      return state
  }
}
