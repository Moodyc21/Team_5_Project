import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOneUserRoute} from '../../actions/thunk.actions.js'


class UserProfile extends Component {

    componentWillMount() {
        const userId = this.props.match.params.userId;
        this
            .props
            .getOneUserRoute(userId)
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({userBeingShown: {
            id: this.props.match.params.userId,
            username: nextProps.userBeingShown.username,
            firstname: nextProps.userBeingShown.firstname,
            lastname: nextProps.userBeingShown.lastname,
            img_url: nextProps.userBeingShown.img_url,
            description: nextProps.userBeingShown.description

        }})
    }

    state = {
        userBeingShown: {
            username: "",
            firstname: "",
            lastname: "",
            img_url: "",
            description: ""

        }
    }
    
    render() {
        console.log("our user",this.props.userBeingShown)
        return (
            <Container>
                User Profile Route 
                
                <img src={this.state.userBeingShown.img_url} alt={this.state.userBeingShown.username}/>
                <h1>{this.state.userBeingShown.firstname} {this.state.userBeingShown.lastname}</h1>

                {/* {this
                    .props
                    .posts
                    .map(post => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <h4>{post.content}</h4>
                        </div>
                    ))}  */}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {userBeingShown: state.users[0]}
}

export default connect(mapStateToProps, {getOneUserRoute})(UserProfile);

// /////////////////////////////////////////////////////////////////////////////
// / / STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////
// / /

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
