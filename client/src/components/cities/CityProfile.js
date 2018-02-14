import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getCityRoute} from '../../actions/thunk.actions.js'
import {push} from 'react-router-redux'

class CityProfile extends Component {

  componentWillMount() {
    this
      .props
      .getCityRoute()
  }

  render() {
    const cityId = this.props.match.params.cityId;
    return (
      <Container>
        {this
          .props
          .cities
          .map((city, i) => {
            if (city.id == cityId) {
              return (
                <div key={i}>
                  <h2>
                    {city.name}</h2>
                  <div>
                    Name:{city.name}
                  </div>
                  <div>
                    Location:{city.location}
                  </div>
                  <br/>
                  <div>
                    <img src={city.img_url} alt={city.name}/>
                  </div>
                  <div>
                    <h3>Posts</h3>
                  </div>
                  <br/>
                  <div>
                    <button onClick={() => this.props.push(`/cities/${city.id}/edit`)}>
                      Edit {city.name}
                    </button>
                  </div>
                </div>
              )
            }

          })}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {cities: state.cities}
}

export default connect(mapStateToProps, {getCityRoute, push})(CityProfile);

// /////////////////////////////////////////////////////////////////////////////
// / / STYLED-COMPONENTS
// /////////////////////////////////////////////////////////////////////////////

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
      background:rgba(0,0,0,0.15);
      }};
`
