import React, {Component} from 'react'
import {connect} from 'react-redux'
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
    this.setState({
      newUserForm: {
        username: ""
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
          value={this.state.newUserForm.username}/>
        <button onClick={this.handleAddNewUser}>Add User</button>
      </div>
    )
  }
}

export default connect(null, {sendNewUserToDatabase})(UserForm)