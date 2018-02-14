import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getCityRoute, deleteCityFromDatabase} from '../../actions/thunk.actions.js'
import EditCityForm from './EditCityForm.js'
import NewCityForm from './NewCityForm.js'

class CityPage extends Component {
  componentWillMount() {
    this
      .props
      .getCityRoute()
  }
  render() {
    return (
      <div>
        <div>
          CityPage.js Component
        </div>
        {this
          .props
          .cities
          .map((city, i) => {
            return (
              <div key={i}>
                <div>
                  City Name: {city.name}
                  <br/>
                  Location: {city.location}
                </div>
                <div>
                  <img width="400" src={city.img_url} alt={city.name}/>
                </div>
                <div>
                  city ID: {city.id}
                </div>
                <div>
                  <EditCityForm city={city}/>
                </div>
                <div>
                  <button onClick={() => this.props.deleteCityFromDatabase(city)}>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        <div>
          <NewCityForm/>
        </div>
        <button onClick={() => this.props.push('/')}>
          Go back to SplashPage.js
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {cities: state.cities}
}
export default connect(mapStateToProps, {push, getCityRoute, deleteCityFromDatabase})(CityPage)