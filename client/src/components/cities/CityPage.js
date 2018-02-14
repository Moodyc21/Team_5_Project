import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getCityRoute, deleteCityFromDatabase } from '../../actions/thunk.actions.js'
import EditCityForm from './EditCityForm.js'
import NewCityForm from './NewCityForm.js'
import styled from 'styled-components'

class CityPage extends Component {
  componentWillMount() {
    this
      .props
      .getCityRoute()
  }
  render() {
    return (
      <Body>
        <div>
          <h2>CityPage</h2>
        </div>
        <button onClick={() => this.props.push('/')}>
          Home
        </button>
        <br/>
        <div>
          <NewCityForm />
        </div>
       
        <Container>


          {this
            .props
            .cities
            .map((city, i) => {
              return (
                <div>

                  <CityBox key={i}>
                    <CityTitle>
                      <div>
                        {city.name}
                        <br />
                        {city.location}
                        </div>
                        <DeleteButton onClick={() => this.props.deleteCityFromDatabase(city)}>
                          X
                  </DeleteButton>
                    </CityTitle>
                    <div>
                      <img src={city.img_url} alt={city.name} />
                    </div>

                    <div>
                      {/* <EditCityForm city={city} /> */}
                    </div>

                  </CityBox>
                </div>
              )
            })}

        </Container>
      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return { cities: state.cities }
}
export default connect(mapStateToProps, { push, getCityRoute, deleteCityFromDatabase })(CityPage)

/////////////////////////////////////////////////////////////////////////////////
// STYLED-COMPONENTS
/////////////////////////////////////////////////////////////////////////////////


const Body = styled.div`
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
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      background:rgba(255,255,255,0.45);
      width:30vh;
      height: 4vh;
    }
    button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      width: 20vh;
      height: 5vh;
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    font-family: 'Montserrat', sans-serif;
    margin: 40px;
`;

const DeleteButton = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    width: 3.5vh;
    height: 3.5vh;
    font-size: 3vh;
    border: 1px solid black;
    margin: 20px;
    &:hover{
        color: red;
      background:rgba(0,0,0,0.15);
      }
`;

const CityTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vh;
    justify-content: flex-end;
    align-items: center;
    margin:5px;
    padding:5px;`


const CityBox = styled.div`
    width: 40vh;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    border: 1px solid darkgray;
    background: rgba(255,255,255,0.55);
    font-size: 2.25vh;
    box-shadow: 3px 3px 0px #3f3f3f;
    img {
        width: 38vh;
    height:25vh;
    border: 1px solid darkgray;
    box-shadow: 1.5px 1.5px 0px #7e7e7e;
    align-self: center;
    margin:5px;

    }&:hover{
        color: #696969;
        transform:translateY(2px);
        box-shadow: 1.5px 1.5px 0px #7e7e7e;
        z-index: 3;
    }
    /* input{
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      width: 20vh;
    } */
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