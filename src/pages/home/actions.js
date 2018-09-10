import axios from 'axios'
import { AJAX_START, AJAX_ERROR } from '../../constants/constants'
import POST_TYPES from '../../constants/post-types'

export const SET_TOPICS = 'SET_TOPICS'
export function fetchTopics (type = POST_TYPES[0], pageIndex = 1) {
  return function(dispatch) {
    dispatch({type: AJAX_START})
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${type.value}&page=${pageIndex}&limit=20`)
      .then(({data}) => {
        if(data.success) {
          return data.data
        } else {
          return []
        }
      }).then(topics => {
        dispatch({
          type: SET_TOPICS,
          payload: {
            type: type,
            items: topics,
            page: pageIndex
          }
        })
      }).catch(e => {
        dispatch({type: AJAX_ERROR, payload: e})
      })
  }
}
