export default function (state = {}, action){
  switch (action.type) {
    case 'THEME_STYLE':
      return action.payload;
    default:
      return state
  }
}
