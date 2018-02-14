import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {} from '../../actions/thunk.actions.js'
import axios from 'axios'

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
            <div>
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
            </div>
        );
    }
}

export default UserProfile;
