import {combineReducers} from 'redux'
import users from './userReducer.js'
import cities from './cityReducer.js'
import posts from './postReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({users, cities, posts, router})

export default rootReducer