import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOneCityRoute} from '../../actions/thunk.actions.js'

// import {push} from 'react-router-redux' import axios from 'axios'

class CityProfile extends Component {

  componentWillMount() {
    const cityId = this.props.match.params.id;
    this
      .props
      .getOneCityRoute(cityId)
  }

  render() {
    return (
      <Container>
        City Profile Route
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {cityBeingShown: state.cities[0]}
}

export default connect(mapStateToProps, {getOneCityRoute})(CityProfile);

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
