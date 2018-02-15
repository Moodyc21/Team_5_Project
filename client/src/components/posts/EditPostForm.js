import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {editPostInDatabase} from '../../actions/thunk.actions.js'
import Navbar from '../navbar/Navbar'

class EditPostForm extends Component {

  componentWillMount(cityId, postId) {
    this
      .props
      .getOnePostRoute(this.props.match.params.cityId, this.props.match.params.postId)
      
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postBeingEdited: {
        title: nextProps.postBeingEdited.title,
        content: nextProps.postBeingEdited.content,
      }
    })
  }


  state = {
    postBeingEdited: {
      user_id: 1,
      title: "",
      content: ""
    }
  }

  handleChange = (event) => {
    const updatedPost = {
      ...this.state.postBeingEdited
    }

    const inputField = event.target.name
    const inputValue = event.target.value
    updatedPost[inputField] = inputValue
    this.setState({postBeingEdited: updatedPost})
  }

  handleEditPost = () => {
    const postId = this.props.match.params.postId
    const cityId = this.props.match.params.cityId
    const editPost = this.state.postBeingEdited
    editPost.city_id = cityId
    editPost.post_id = postId
    this
      .props
      .editPostInDatabase(cityId, editPost)
      .then(() => {
        (this.props.push(`/cities/${cityId}/posts/${postId}/show`))
      })
  }

  render() {
    return (
      <Container>
        {/* <div>
          <Navbar />
        </div> */}
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.postBeingEdited.title}
          placeholder="Title"/>
        <textarea
          type="text"
          name="content"
          onChange={this.handleChange}
          value={this.state.postBeingEdited.content}
          placeholder="Content"/>
        <button onClick={this.handleEditPost}>
          Edit
        </button>
      </Container>
    )
  }
}

export default connect(null, {editPostInDatabase})(EditPostForm)

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    /* position: absolute;  */
    top: 100px;
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
      width: 70vh;
      height: 5vh;
      margin: 3px;
      padding-left: 5px;
      background:rgba(255,255,255,0.65);
    }
    textarea{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 0px rgba(0,0,0,0.25);
      border:1px solid black;
      background:none;
      border-radius:3px;
      width: 50vh;
      height: 15vh;
      margin: 3px;
      padding-left: 5px;
      background:rgba(255,255,255,0.65);
    };
`