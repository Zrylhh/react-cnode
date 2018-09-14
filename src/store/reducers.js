import { SHOW_AJAX_LOADING } from '../constants/constants'
import  store from './index'
import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1/'
axios.interceptors.request.use((config) => {
  store.dispatch({
    type: SHOW_AJAX_LOADING,
    payload: true
  })
  return config
})
axios.interceptors.response.use((response) => {
  store.dispatch({
    type: SHOW_AJAX_LOADING,
    payload: false
  })
  return  response
})

export function reducers (state = false, action) {
  let { type, payload } = action
  switch(type) {
    case SHOW_AJAX_LOADING:
      return payload
    default:
      return state
  }
}