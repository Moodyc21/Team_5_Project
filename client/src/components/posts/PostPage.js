import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getPostsRoute, deletePostFromDatabase} from '../../actions/thunk.actions.js'
import EditPostForm from './EditPostForm.js'
import Navbar from '../navbar/Navbar'

class PostPage extends Component {
  componentWillMount() {
    const cityId = this.props.match.params.cityId
    this
      .props
      .getPostsRoute(cityId)
  }
  render() {
    return (
      <div>
        <div>
          <Navbar/>
        </div>
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
export default connect(mapStateToProps, {push, getPostsRoute, deletePostFromDatabase})(PostPage)
