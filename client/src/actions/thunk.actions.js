import axios from 'axios'

export function sendUsersToState(usersFromDatabase) {
  return {type: 'GET_USERS', usersFromDatabase}
}

export function getUserRoute() {
  return function (dispatch) {
    return axios
      .get('/api/users')
      .then((response) => {
        dispatch(sendUsersToState(response.data))
      })
  }
}

export function sendNewUserToState(newUserData) {
  return {type: 'CREATE_USER', newUserData}
}

export function sendNewUserToDatabase(newUserInfo) {
  return function (dispatch) {
    return axios
      .post('/api/users', newUserInfo)
      .then((response) => {
        dispatch(sendNewUserToState(response.data))
      })
  }
}

export function editedUserToState(editedUserData) {
  return {type: 'EDIT_USER', editedUserData}
}

export function editUserInDatabase(editedUserInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/users/${editedUserInfo.id}`, editedUserInfo)
      .then((response) => {
        dispatch(editedUserToState(editedUserInfo))
      })
  }
}

export function deleteUserFromState(userToDeleteId) {
  return {type: 'DELETE_USER', userToDeleteId}
}

export function deleteUserFromDatabase(userToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/users/${userToDeleteFromDatabase._id}`)
      .then((response) => {
        dispatch(deleteUserFromState(userToDeleteFromDatabase._id))
      })
  }
}