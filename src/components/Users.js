import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)
    return (
      <div>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <h4>Total Users: {this.props.numberOfUsers}</h4>
        {/* <h4>Total Users: {users.length}</h4> */}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
