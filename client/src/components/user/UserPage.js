import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {getUserRoute, deleteUserFromDatabase} from '../../actions/thunk.actions.js'

class UserPage extends Component {
  componentWillMount() {
    this
      .props
      .getUserRoute()
  }

  render() {
    return (
      <Body>
        <Header>
          <div>Welcome to User Page</div>
        </Header>
        <div>
          <button onClick={() => this.props.push(`/users/new`)}>
            New User
          </button>
        </div>
        <button onClick={() => this.props.push('/')}>
          Home
        </button>
        <Container>

          {this
            .props
            .users
            .map((user, i) => {
              return (
                <UserBox key={i}>
                  <div onClick={() => this.props.push(`/users/${user.id}/show`)}>
                    <img width="200" src={user.img_url} alt={user.username}/>
                    <br/> {user.username}
                  </div>

                  <div>
                    <button onClick={() => this.props.push(`/users/${user.id}/edit`)}>
                      Edit
                    </button>

                    <button onClick={() => this.props.deleteUserFromDatabase(user)}>
                      Delete
                    </button>
                  </div>
                </UserBox>
              )
            })}

        </Container>

      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, getUserRoute, deleteUserFromDatabase})(UserPage)

// /////////////////////////////////////////////////////////////////////////////
// / /// STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////
// / ///

const Body = styled.div `
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

const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    font-family: 'Montserrat', sans-serif;
    margin: 40px;
    a{
        text-decoration: none;
        color:black;
        &:hover{
        color: #696969;
        transform:translateY(2px);
        text-shadow: 0px 0px 0px #bdbdbd;
        z-index: 3;
    }
    }
`;

const Header = styled.h1 `
    margin: 20 auto;
    color: white;
    font-size: 3vh;
    text-shadow: 2.5px 2.5px 0px #3f3f3f;
    /* border-bottom: thin solid white; */
`;

const Users = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    `

const UserBox = styled.div `
    width: 27.5vh;
    height: 27.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    border: 1px solid darkgray;
    background: rgba(255,255,255,0.55);
    font-size: 2.25vh;
    box-shadow: 3px 3px 0px #3f3f3f;
    img {
        width: 15vh;
    height:15vh;
    border: 1px solid darkgray;
    box-shadow: 1.5px 1.5px 0px #7e7e7e;
    border-radius: 8vh;
    align-self: center;
    margin:5px;

    }&:hover{
        color: #696969;
        transform:translateY(2px);
        box-shadow: 1.5px 1.5px 0px #7e7e7e;
        z-index: 3;
    }
    input{
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      width: 20vh;
    }
    button{
      border:1px solid black;
      background:none;
      width: 75px;
      height: 30px;
      padding:7.5px;
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
      flex-self:center;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
      background:rgba(0,0,0,0.15)
      }
`;