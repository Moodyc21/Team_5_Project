import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editPostInDatabase} from '../../actions/thunk.actions.js'

class EditPostForm extends Component {

  state = {
    postBeingEdited: {
      id: this.props.post._id,
      title: this.props.post.title
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
    this
      .props
      .editPostInDatabase(this.state.postBeingEdited)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.postBeingEdited.title}
          placeholder="Title"/>
          <input
          type="text"
          name="content"
          onChange={this.handleChange}
          value={this.state.postBeingEdited.content}
          placeholder="Content"/>
        <button onClick={this.handleEditPost}>
          Edit
        </button>
      </div>
    )
  }
}

export default connect(null, {editPostInDatabase})(EditPostForm)
