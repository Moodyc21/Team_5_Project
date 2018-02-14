import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
// import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.push(`/`)}>
                    Home
                </button>
                <button onClick={() => this.props.push(`/users`)}>
                    Users
                </button>
                <button onClick={() => this.props.push(`/cities`)}>
                    Cities
                </button>

            </div>
        )
    }
}

export default connect(null, {push})(Navbar)