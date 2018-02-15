import axios from 'axios'

// POST ACTIONS

export function sendPostsToState(postsFromDatabase) {
  return {type: 'GET_POSTS', postsFromDatabase}
}

export function getPostsRoute(cityId) {
  return function (dispatch) {
    return axios
      .get(`/api/cities/${cityId}/posts`)
      .then((response) => {
        dispatch(sendPostsToState(response.data))
      })
  }
}

export function sendNewPostToState(newPostData) {
  return {type: 'CREATE_POST', newPostData}
}

export function sendNewPostToDatabase(cityId, newPostInfo) {
  return function (dispatch) {
    return axios
      .post(`/api/cities/${cityId}/posts`, newPostInfo)
      .then((response) => {
        dispatch(sendNewPostToState(response.data))
      })
  }
}

export function editedPostToState(editedPostData) {
  return {type: 'EDIT_POST', editedPostData}
}

export function editPostInDatabase(cityId, editedPostInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/cities/${cityId}/posts/${editedPostInfo.id}`, editedPostInfo)
      .then((response) => {
        dispatch(editedPostToState(editedPostInfo))
      })
  }
}

export function deletePostFromState(postToDeleteId) {
  return {type: 'DELETE_POST', postToDeleteId}
}

export function deletePostFromDatabase(cityId, postToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/cities/${cityId}/posts/${postToDeleteFromDatabase.id}`)
      .then((response) => {
        dispatch(deletePostFromState(postToDeleteFromDatabase.id))
      })
  }
}

// CITY ACTIONS

export function sendCitiesToState(citiesFromDatabase) {
  return {type: 'GET_CITIES', citiesFromDatabase}
}

export function getCityRoute() {
  return function (dispatch) {
    return axios
      .get('/api/cities')
      .then((response) => {
        dispatch(sendCitiesToState(response.data))
      })
  }
}

export function sendOneCityToState(cityFromDatabase) {
  return {type: 'GET_ONE_CITY', cityFromDatabase}
}

export function getOneCityRoute(cityId) {
  return function (dispatch) {
    return axios
      .get(`/api/cities/${cityId}`)
      .then((response) => {
        dispatch(sendOneCityToState(response.data))
      })
  }
}

export function sendNewCityToState(newCityData) {
  return {type: 'CREATE_CITY', newCityData}
}

export function sendNewCityToDatabase(newCityInfo) {
  return function (dispatch) {
    return axios
      .post('/api/cities', newCityInfo)
      .then((response) => {
        dispatch(sendNewCityToState(response.data))
      })
  }
}

export function editedCityToState(editedCityData) {
  return {type: 'EDIT_CITY', editedCityData}
}

export function editCityInDatabase(editedCityInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/cities/${editedCityInfo.id}`, editedCityInfo)
      .then((response) => {
        dispatch(editedCityToState(editedCityInfo))
      })
  }
}

export function deleteCityFromState(cityToDeleteId) {
  return {type: 'DELETE_CITY', cityToDeleteId}
}

export function deleteCityFromDatabase(cityToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/cities/${cityToDeleteFromDatabase._id}`)
      .then((response) => {
        dispatch(deleteCityFromState(cityToDeleteFromDatabase._id))
      })
  }
}

// USER ACTIONS

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

export function sendOneUserToState(userFromDatabase) {
  return {type: 'GET_ONE_USER', userFromDatabase}
}

export function getOneUserRoute(userId) {
  return function (dispatch) {
    return axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        dispatch(sendOneUserToState(response.data))
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
  console.log(editedUserData)
  return {type: 'EDIT_USER', editedUserData}
}

export function editUserInDatabase(editedUserInfo) {
  console.log(editedUserInfo)
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
  console.log(userToDeleteFromDatabase)
  return function (dispatch) {
    return axios
      .delete(`/api/users/${userToDeleteFromDatabase.id}`)
      .then((response) => {
        dispatch(deleteUserFromState(userToDeleteFromDatabase.id))
      })
  }
}