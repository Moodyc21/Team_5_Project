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

export function sendOnePostToState(postFromDatabase) {
  return {type: 'GET_ONE_POST', postFromDatabase}
}

export function getOnePostRoute(cityId, postId) {
  return function (dispatch) {
    return axios
      .get(`/api/cities/${cityId}/posts/${postId}`)
      .then((response) => {
        dispatch(sendOnePostToState(response.data))
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