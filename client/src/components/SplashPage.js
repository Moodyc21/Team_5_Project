import React, {Component} from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class SplashPage extends Component {
  render() {
    return (
      <div>
        <h1>Vagabond</h1>

        <button type='button' onClick={() => this.props.push('/users')}>
          Enter
        </button>
      </div>

    );
  }
}

export default connect(null, {push})(SplashPage)
