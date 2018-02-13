import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore.js'

import SplashPage from './components/SplashPage.js'
import UserPage from './components/user/UserPage.js'
import NewUserForm from './components/user/NewUserForm.js'
import CityPage from './components/cities/CityPage.js'
import NewCityForm from './components/cities/NewCityForm.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SplashPage}/>

        <Route exact path="/cities" component={CityPage}/>
        <Route exact path="/cities/new" component={NewCityForm}/>
        <Route exact path="/users" component={UserPage}/>
        <Route exact path="/users/new" component={NewUserForm}/>

      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root