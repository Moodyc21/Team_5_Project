import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import axios from 'axios'
import {} from '../../actions/thunk.actions.js'


class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            posts: []
        };
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        this.fetchUserAndPostData(userId)
    }

    fetchUserAndPostData = async(userId) => {
        try {
            const userResponse = await axios.get(`/api/users/${userId}`)
            const postsResponse = await axios.get(`/api/users/${userId}/posts`)
            await this.setState({user: userResponse.data, posts: postsResponse.data});
        } catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

    render() {
        return (
            <Container>
                <img src={this.state.user.img_url} alt={this.state.user.username}/>
                <h1>{this.state.user.firstname} {this.state.user.lastname}</h1>
                {this
                    .state
                    .posts
                    .map(post => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <h4>{post.content}</h4>
                        </div>
                    ))}
            </Container>
        );
    }
}

export default UserProfile;

/////////////////////////////////////////////////////////////////////////////////
// STYLED-COMPONENTS
/////////////////////////////////////////////////////////////////////////////////


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
