import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
// import styled from 'styled-components'
import {sendNewCityToDatabase} from '../../actions/thunk.cities.js'
import Navbar from '../navbar/Navbar'

class NewCityForm extends Component {
  state = {
    newCityForm: {}
  }

  handleNewCityChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newCityForm = {
      ...this.state.newCityForm
    }
    newCityForm[attributeName] = attributeValue

    this.setState({newCityForm})
  };

  handleAddNewCity = () => {
    this
      .props
      .sendNewCityToDatabase(this.state.newCityForm)
    this
      .props
      .push(`/cities`)
    this.setState({
      newCityForm: {
        name: "",
        location: "",
        img_url: ""
      }
    })
  };

  render() {
    return (

      <div>
        <div>
          <Navbar/>
        </div>
        <input
          className="newCity"
          type="text"
          name="name"
          onChange={this.handleNewCityChange}
          value={this.state.newCityForm.name}
          placeholder="Name"/>
        <br/>
        <input
          className="newCity"
          type="text"
          name="location"
          onChange={this.handleNewCityChange}
          value={this.state.newCityForm.location}
          placeholder="Location"/>
        <br/>
        <input
          className="newCity"
          type="text"
          name="img_url"
          onChange={this.handleNewCityChange}
          value={this.state.newCityForm.img_url}
          placeholder="Image"/>
        <button onClick={this.handleAddNewCity}>Add City</button>
      </div>
    )
  }
}

export default connect(null, {sendNewCityToDatabase, push})(NewCityForm)
