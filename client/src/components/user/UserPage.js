import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {getUserRoute, deleteUserFromDatabase} from '../../actions/thunk.actions.js'
import EditUserForm from './EditUserForm.js'
import NewUserForm from './NewUserForm.js'

class UserPage extends Component {
  componentWillMount() {
    this
      .props
      .getUserRoute()
  }
  render() {
    return (
      <div>
        <div>
          UserPage.js Component
        </div>
        {this
          .props
          .users
          .map((user, i) => {
            return (
              <div key={i}>
                <div>
                  Username: {user.userName}
                </div>
                <div>
                  User ID: {user._id}
                </div>
                <div>
                  <EditUserForm user={user}/>
                </div>
                <div>
                  <button onClick={() => this.props.deleteUserFromDatabase(user)}>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        <div>
          <NewUserForm/>
        </div>
        <button onClick={() => this.props.push('/')}>
          Go back to SplashPage.js
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {push, getUserRoute, deleteUserFromDatabase})(UserPage)