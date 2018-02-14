function postReducer(state = [], action) {

  switch (action.type) {

    case 'GET_POSTS':
      return [...action.postsFromDatabase]

    case 'CREATE_POST':
      return [
        ...state,
        action.newPostData
      ]

    case 'EDIT_POST':
      return state

    case 'DELETE_POST':
      return state.filter(post => post._id !== action.postToDeleteId)

    default:
      return state
  }
}
export default postReducer