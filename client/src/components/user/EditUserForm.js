import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {editUserInDatabase, getOneUserRoute} from '../../actions/thunk.actions.js'

class EditUserForm extends Component {

  componentWillMount() {
    this
      .props
      .getOneUserRoute(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
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
      .then((response) => {
        (this.props.push(`/users`))
      })
  }

  render() {

    const userId = this.props.match.params.userId

    return (
      <Container>
        <div>
          <h2>
            {this.state.userBeingEdited.username}</h2>
        </div>
        <div>
          <div>
            Username:</div>
          <input
            className="editUser"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.username}/>
        </div>
        <div>
          <div>
            Firstname:</div>
          <input
            className="editUser"
            type="text"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.firstname}/>
        </div>
        <div>
          <div>
            Lastname:</div>
          <input
            className="editUser"
            type="text"
            name="lastname"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.lastname}/>
        </div>
        <div>
          <div>
            Image-URL:</div>
          <input
            className="editUser"
            type="text"
            name="img_url"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.img_url}/>
        </div>
        <div>
          <div>
            Description:</div>
          <input
            className="editUser"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.userBeingEdited.description}/>
        </div>
        <br/>
        <button onClick={this.handleEditUser}>
          Edit
        </button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {userBeingEdited: state.users[0]}
}

export default connect(mapStateToProps, {getOneUserRoute, editUserInDatabase, push})(EditUserForm)

// /////////////////////////////////////////////////////////////////////////////
// / / STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 0px rgba(0,0,0,0.25);
      border:1px solid black;
      background:none;
      border-radius:3px;
      width: 35vh;
      height: 5vh;
      margin: 3px;
      padding-left: 5px;
      background:rgba(255,255,255,0.65);
    }
    button{
      border:1px solid black;
      background:none;
      width: 125px;
      height: 45px;
      padding:7.5px;
      font-size: 15px;
      text-align: center;
      margin:5px;
      font-family: 'Montserrat', sans-serif;
      background:rgba(255,255,255,0.45);
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color: white;
      background:rgba(0,0,0,0.15);
      }};
`