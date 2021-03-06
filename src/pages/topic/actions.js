import axios from 'axios'
import { AJAX_ERROR } from '../../constants/constants'

export const FETCH_TOPIC_BY_ID = 'FETCH_TOPIC_BY_ID'
export function fetchTopicById (topicId) {
  return function (dispatch) {
    axios
      .get(`topic/${topicId}`)
      .then(({data}) => {
        if (data.success) {
          return dispatch({
            type: FETCH_TOPIC_BY_ID,
            payload: data.data
          })
        }
        return dispatch({
          type: AJAX_ERROR,
          payload: data
        })
      }).catch(e => {
        return dispatch({
          type: AJAX_ERROR,
          payload: e
        })
      })
  }
}