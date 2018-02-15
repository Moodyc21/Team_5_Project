import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
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
    const cityId = this.props.match.params.cityId
    return (
      <Body>
        <Navbar/>
        <h2>PostPage</h2>
        <Post>
          <div>
            <button onClick={() => this.props.push(`/cities/${cityId}/posts/new`)}>
              New Post
            </button>
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
                    <button onClick={() => this.props.deletePostFromDatabase(post)}>
                      Delete
                    </button>
                  </div>
                  <PostEdit>
                    <EditPostForm post={post}/>
                  </PostEdit>
                </div>
              )
            })}
        </Post>
      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return {posts: state.posts}
}
export default connect(mapStateToProps, {push, getPostsRoute, deletePostFromDatabase})(PostPage)

// /////////////////////////////////////////////////////////////////////////////
// / / STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////
// / /

const Body = styled.div `
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

const PostEdit = styled.div `
font-family: 'Montserrat', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 30px;
position: absolute;
`

const Post = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* flex-flow:wrap; */
    text-align: left;
    box-shadow:4px 4px 4px rgba(0,0,0,0.45);
    cursor: pointer;
    background:rgba(255,255,255,0.45);
    margin:2px;
    border: 1px solid darkgray;
    padding: 15px;
    height: 60vh;
    width: 80vh;
    /* overflow:scroll; */
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
      transform:translateY(2px);
      }
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      width: 60vh;
    }
`
