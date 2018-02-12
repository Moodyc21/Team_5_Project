//Import from React
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'


class SplashPage extends Component {
  render() {
    return (
      <Container>
        <h1>Vagabond</h1>

        <button type='button' onClick={() => this.props.push('/users')}>
          Enter
        </button>
      </Container>

    );
  }
}

export default connect(null, {push})(SplashPage)


// Styled-Components

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(transparent,transparent,rgb(33,33,33)),rgba(33,33,33,0.01);
    a{
        text-decoration: none;
    color: white;
    text-shadow:4px 4px 8px #000000;
    z-index: auto;
    &:hover {
        color: #7e7e7e;
        text-shadow: none;
        text-shadow:2px 2px 2px #000000;
    }
    }

