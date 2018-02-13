function cityReducer(state = [], action) {

  switch (action.type) {

    case 'GET_CITIES':
      return [...action.citiesFromDatabase]

    case 'CREATE_CITY':
      return [
        ...state,
        action.newCityData
      ]

    case 'EDIT_CITY':
      return updateObjectInArray(state, action)

    case 'DELETE_CITY':
      return state.filter(city => city._id !== action.cityToDeleteId)

    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((city) => {
    if (city._id !== action.editedCityData.id) {
      return city
    }
    return {
      ...city,
      ...action.editedCityData
    }
  })
}

export default cityReducer