export default function (state = null, action){
  switch (action.type) {
    case 'CURRENT_CURRENCY':
      return action.payload
    default:
      return state
  }
}
