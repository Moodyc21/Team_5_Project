import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <Container>
                <button onClick={() => this.props.push(`/`)}>
                    Home
                </button>
                <button onClick={() => this.props.push(`/users`)}>
                    Users
                </button>
                <button onClick={() => this.props.push(`/cities`)}>
                    Cities
                </button>

            </Container>
        )
    }
}

export default connect(null, {push})(Navbar)
///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////
const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
    color:black;
    width: 100%;
    position: relative; 
    margin-top:20px;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    img{
      width: 60vh;
      height: 45vh;
      border: 2px solid white;
      box-shadow:5px 5px 5px rgba(255,255,255,0.45);
    }
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
      background:rgba(0,0,0,0.85);
      }};
`
