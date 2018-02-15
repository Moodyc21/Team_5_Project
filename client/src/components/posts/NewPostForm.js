import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

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
      <div>
        <div>
          <Navbar/>
        </div>
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
      </div>
    )
  }
}
export default connect(null, {sendNewPostToDatabase, push})(PostForm)