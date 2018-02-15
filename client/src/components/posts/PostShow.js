import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOnePostRoute} from '../../actions/thunk.posts.js'
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
        this.setState({
            postBeingShown: {
                id: this.props.match.params.postId,
                title: nextProps.postBeingShown.title,
                content: nextProps.postBeingShown.content
            }
        })
    }

    state = {
        postBeingShown: {
            title: "",
            content: ""

        }
    }

    render() {
        console.log("our post", this.props.postBeingShown)
        return (

            <Container>
                <div>
                    <Navbar/>
                </div>
                <h1>Post</h1>
                <br/>
                <SinglePost>
                    <h3>{this.state.postBeingShown.title}</h3>
                    <br/>
                    <p>{this.state.postBeingShown.content}</p>
                </SinglePost>

            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return {postBeingShown: state.posts[0]}
}

export default connect(mapStateToProps, {getOnePostRoute})(PostShow);

// /////////////////////////////////////////////////////////////////////////////
// // STYLED-COMPONENTS
// //////////////////////////////////////////////////////////////////////////////

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
    font-family: 'Montserrat', sans-serif;`

const SinglePost = styled.div `
    text-align: left;
    left: 20px;
    width: 70vh;
    height: 40vh;
    background: rgba(255,255,255,0.75);
    border: 1px solid darkgray;
    box-shadow: 5px 5px 5px darkgray;
    padding: 20px;

    `