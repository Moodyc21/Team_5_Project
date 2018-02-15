import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {sendNewPostToDatabase} from '../../actions/thunk.actions.js'
import Navbar from '../navbar/Navbar'

class PostForm extends Component {

  state = {
    newPostForm: {
      user_id: 1
    }
  }

  handleNewPostChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newPostForm = {
      ...this.state.newPostForm
    }
    newPostForm[attributeName] = attributeValue

    this.setState({newPostForm})
  };

  handleAddNewPost = () => {

    const cityId = this.props.match.params.cityId
    const newPost = this.state.newPostForm
    newPost.city_id = cityId
    console.log(newPost)
    this
      .props
      .sendNewPostToDatabase(cityId, newPost)
      .then(() => {
        (this.props.push(`/cities/${cityId}/show`))
      })
  };

  render() {
    return (
      <Container>
        <div>
          <Navbar/>
        </div>
        <br/> <br/> <br/>
        <input
          className="newPost"
          type="text"
          name="title"
          onChange={this.handleNewPostChange}
          value={this.state.newPostForm.title}
          placeholder="Title"/>
        <br/>
        <textarea
          className="newPost"
          type="text"
          name="content"
          onChange={this.handleNewPostChange}
          value={this.state.newPostForm.content}
          placeholder="Content"/>
        <br/>

        <button onClick={this.handleAddNewPost}>
          Add Post
        </button>
      </Container>
    )
  }
}
export default connect(null, {sendNewPostToDatabase, push})(PostForm)


/////////////////////////////////////////////////////////////////////////////////
// STYLED-COMPONENTS
/////////////////////////////////////////////////////////////////////////////////

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    top: 50px;
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
      width: 40vh;
      height: 5vh;
      margin-top:50px;
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
      width: 40vh;
      height: 25vh;
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