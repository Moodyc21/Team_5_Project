import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-dom'
import {editCityInDatabase} from '../../actions/thunk.actions.js'

class EditCityForm extends Component {

  state = {
    cityBeingEdited: {
      id: this.props.city._id,
      cityname: this.props.city.name
    }
  }

  handleChange = (event) => {
    const updatedCity = {
      ...this.state.cityBeingEdited
    }

    const inputField = event.target.name
    const inputValue = event.target.value
    updatedCity[inputField] = inputValue
    this.setState({cityBeingEdited: updatedCity})
  }

  handleEditCity = () => {
    this
      .props
      .editCityInDatabase(this.state.cityBeingEdited)
      this.props.push(`/cities`)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.cityBeingEdited.name}/>
          <input
          type="text"
          name="location"
          onChange={this.handleChange}
          value={this.state.cityBeingEdited.location}/>
          <input
          type="text"
          name="img_url"
          onChange={this.handleChange}
          value={this.state.cityBeingEdited.img_url}/>
        <button onClick={this.handleEditCity}>
          Edit
        </button>
      </div>
    )
  }
}

export default connect(null, {editCityInDatabase, push})(EditCityForm)