function userReducer(state = [], action) {

  switch (action.type) {

    case 'GET_USERS':
      return [...action.usersFromDatabase]

    case 'GET_ONE_USER':
      return [...action.userFromDatabase]

    case 'CREATE_USER':
      return [
        ...state,
        action.newUserData
      ]

    case 'EDIT_USER':
      return updateObjectInArray(state, action)

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.userToDeleteId)

    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((users) => {
    if (users.id !== action.editedUserData.id) {
      return users
    }
    return {
      ...users,
      ...action.editedUserData
    }
  })
}

export default userReducer