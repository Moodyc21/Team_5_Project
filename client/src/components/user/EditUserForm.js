import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {editUserInDatabase, getOneUserRoute} from '../../actions/thunk.actions.js'

class EditUserForm extends Component {

  componentWillMount() {
    this
      .props
      .getOneUserRoute(this.props.match.params.userId)

    console.log("Mounting.")
  }

  componentWillReceiveProps(nextProps) {
    console.log("In another method")
    console.log('', nextProps)
    this.setState({
      userBeingEdited: {
        id: this.props.match.params.userId,
        username: nextProps.userBeingEdited.username,
        firstname: nextProps.userBeingEdited.firstname,
        lastname: nextProps.userBeingEdited.lastname,
        img_url: nextProps.userBeingEdited.img_url,
        description: nextProps.userBeingEdited.description
      }
    })
    // this.setState(userBeingEdited)
  }
  state = {
    userBeingEdited: {
      id: "",
      username: "",
      firstname: "",
      lastname: "",
      img_url: "",
      description: ""
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
        <div>
          <input
            className="editUser"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.username}/>
        </div>
        <div>
          <input
            className="editUser"
            type="text"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.firstname}/>
        </div>
        <div>
          <input
            className="editUser"
            type="text"
            name="lastname"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.lastname}/>
        </div>
        <div>
          <input
            className="editUser"
            type="text"
            name="img_url"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.img_url}/>
        </div>
        <div>
          <input
            className="editUser"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.description}/>
        </div>
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