import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOnePostRoute} from '../../actions/thunk.actions.js'
import Navbar from '../navbar/Navbar.js'


class PostShow extends Component {

    componentWillMount() {
        const postId = this.props.match.params.postId;
        const cityId = this.props.match.params.cityId;
        this
            .props
            .getOnePostRoute(cityId, postId)
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({postBeingShown: {
            id: this.props.match.params.postId,
            title: nextProps.postBeingShown.title,
            content: nextProps.postBeingShown.content,

        }})
    }

    state = {
        postBeingShown: {
            title: "",
            content: ""

        }
    }
    
    render() {
        console.log("our post",this.props.postBeingShown)
        return (
            
            <div>
                <div>
                <Navbar />
                </div>
                <h1>Post</h1>
                <br/>
                 <h3>{this.state.postBeingShown.title}</h3>
                 <br/>
                <p>{this.state.postBeingShown.content}</p>

               
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {postBeingShown: state.posts[0]}
}

export default connect(mapStateToProps, {getOnePostRoute})(PostShow);