import axios from 'axios'

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