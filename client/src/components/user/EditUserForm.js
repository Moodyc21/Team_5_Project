import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {editUserInDatabase, getOneUserRoute} from '../../actions/thunk.actions.js'

class EditUserForm extends Component {

  componentWillMount() {
    this
      .props
      .getOneUserRoute(this.props.match.params.userId)
  }

  state = {
    userBeingEdited: {
      id: this.props.match.params.userId,
      username: this.props.username,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      img_url: this.props.img_url
    }
  }

  handleChange = (event) => {
    const updatedUser = {
      ...this.state.userBeingEdited
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue
    this.setState({userBeingEdited: updatedUser})
  }

  handleEditUser = () => {
    this
      .props
      .editUserInDatabase(this.state.userBeingEdited)
    this
      .props
      .push(`/users`)
  }

  render() {

    const userId = this.props.match.params.userId

    return (
      <div>
        <div>
          User ID = {userId}
        </div>
        <input
          className="editUser"
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.userBeingEdited.username}/>
          <br/>
        <button onClick={this.handleEditUser}>
          Edit
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userBeingEdited: state.users[0]}
}

export default connect(mapStateToProps, {getOneUserRoute, editUserInDatabase, push})(EditUserForm)