const bookReducer = function (state = {}, action) {

  switch (action.type) {
  case 'GET_BOOKS':
    return {
      ...state,
      name: action.payload
    }

  default:
    return state
  }
}

export default bookReducer