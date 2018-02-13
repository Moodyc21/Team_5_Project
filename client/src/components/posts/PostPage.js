import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getPostRoute, deletePostFromDatabase} from '../../actions/thunk.actions.js'
import EditPostForm from './EditPostForm.js'

class PostPage extends Component {
  componentWillMount() {
    this
      .props
      .getPostRoute()
  }
  render() {
    return (
      <div>
        <div>
          PostPage.js Component
        </div>
        {this
          .props
          .posts
          .map((post, i) => {
            return (
              <div key={i}>
                <div>
                  Title: {post.title}
                  <br/>
                  Content: {post.content}
                </div>
                <div>
                  Post ID: {post._id}
                </div>
                <div>
                  <EditPostForm post={post}/>
                </div>
                <div>
                  <button onClick={() => this.props.deletePostFromDatabase(post)}>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        <div>
          <button onClick={() => this.props.push(`/posts/new`)}>
            Make a new PostPage
          </button>
        </div>
        <button onClick={() => this.props.push('/')}>
          Go back to SplashPage.js
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {posts: state.posts}
}
export default connect(mapStateToProps, {push, getPostRoute, deletePostFromDatabase})(PostPage)

