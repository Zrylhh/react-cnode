import axios from 'axios'
import { AJAX_ERROR } from '../../constants/constants'

export const FETCH_USER_BY_LOGINNAME = 'FETCH_USER_BY_LOGINNAME'
export function fetchUserInfoByLoginname (loginame) {
  return function (dispatch) {
    axios
      .get(`user/${loginame}`)
      .then(({data}) => {
        if (data.success) {
          return dispatch({
            type: FETCH_USER_BY_LOGINNAME,
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