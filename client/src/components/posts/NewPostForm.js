import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {sendNewPostToDatabase} from '../../actions/thunk.actions.js'
import Navbar from '../navbar/Navbar'

class PostForm extends Component {
  state = {
    newPostForm: {}
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
    this
      .props
      .sendNewPostToDatabase(this.state.newPostForm)
    this
      .props
      .push(`/posts`)
    this.setState({
      newPostForm: {
        title: "",
        content: ""
      }
    })
  };

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <input
          className="newPost"
          type="text"
          name="title"
          onChange={this.handleNewPostChange}
          value={this.state.newPostForm.title}
          placeholder="Title"/>
        <br/>
        <input
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
      </div>
    )
  }
}

export default connect(null, {sendNewPostToDatabase, push})(PostForm)