//Import from React
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'


class SplashPage extends Component {
  render() {
    return (
      
      <Container>
        <h1>City Point</h1>
        <div>
        <button type='button' onClick={() => this.props.push('/users')}>
          Users
        </button>
        <button type='button' onClick={() => this.props.push('/cities')}>
          Cities
        </button>
        </div>
      </Container>

    );
  }
}

export default connect(null, {push})(SplashPage)

// Styled-Components

const Container = styled.div `
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    right:0;
    bottom:0;
    font-family: 'Montserrat', sans-serif;
    color:#000033;
    font-size: 45px;
    text-shadow:4px 4px 8px rgba(0,0,0,0.35);
    background-size: cover;
    background-repeat:no-repeat;
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    h1{
     position: absolute;
     top:65px;
     margin:20px;
    }
    button{
      border:1px solid black;
      background:none;
      margin-left: 20px;
      background:rgba(255,255,255,0.35);
      box-shadow:4px 4px 8px rgba(0,0,0,0.35);
      width:100px;
      padding:7.5px;
      font-size: 25px;
      font-family: 'Montserrat', sans-serif;
      align-self:flex-start;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        color:white;
      background:rgb(0,0,0);
      transform:translateY(2px);
      }
    }`
