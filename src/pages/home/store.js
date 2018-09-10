import POST_TYPES from '../../constants/post-types';

export const initialState = {
  topics: {
    type: POST_TYPES[0].value,
    page: 1,
    items: []
  }
}
