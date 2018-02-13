import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {sendNewUserToDatabase} from '../../actions/thunk.actions.js'

class UserForm extends Component {
  state = {
    newUserForm: {}
  }

  handleNewUserChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newUserForm = {
      ...this.state.newUserForm
    }
    newUserForm[attributeName] = attributeValue

    this.setState({newUserForm})
  };

  handleAddNewUser = () => {
    this
      .props
      .sendNewUserToDatabase(this.state.newUserForm)
    this
      .props
      .push(`/users`)
    this.setState({
      newUserForm: {
        username: "",
        firstname: "",
        lastname: "",
        img_url: ""
      }
    })
  };

  render() {
    return (
      <div>
        <input
          className="newUser"
          type="text"
          name="username"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.username}
          placeholder="Username"/>
        <br/>
        <input
          className="newUser"
          type="text"
          name="firstname"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.firstname}
          placeholder="First Name"/>
        <br/>
        <input
          className="newUser"
          type="text"
          name="lastname"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.lastname}
          placeholder="Last Name"/>
        <br/>
        <input
          className="newUser"
          type="text"
          name="img_url"
          onChange={this.handleNewUserChange}
          value={this.state.newUserForm.img_url}
          placeholder="Profile picture URL"/>
        <button onClick={this.handleAddNewUser}>
          Add User
        </button>
      </div>
    )
  }
}

export default connect(null, {sendNewUserToDatabase, push})(UserForm)