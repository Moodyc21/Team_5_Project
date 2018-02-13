import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sendNewCityToDatabase} from '../../actions/thunk.actions.js'

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
    this.setState({
      newCityForm: {
        name: ""
      }
    })
  };

  render() {
    return (
      <div>
        <input
          className="newCity"
          type="text"
          name="Cityname"
          onChange={this.handleNewCityChange}
          value={this.state.newCityForm.name}/>
        <button onClick={this.handleAddNewCity}>Add City</button>
      </div>
    )
  }
}

export default connect(null, {sendNewCityToDatabase})(NewCityForm)