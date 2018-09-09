export default function reducers (state = {}, action) {
  let { type, payload } = action
  console.log(type, payload)
  switch(type) {
    default:
      return state
  }
}