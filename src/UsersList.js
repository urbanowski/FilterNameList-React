import React, { Component } from 'react';


class UsersList extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        users: props.users
      };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.users !== this.state.users) {
        this.setState(
          {
            users: nextProps.users
          }
        );
        }
      }

    render(){
        if (this.state.users.length > 0){
        return(
            <ul>
                {this.state.users.map(user => <li key={user}>{user}</li>)}
            </ul>
        )
        }
        return(
            <p>No results!</p>
        )
    }
}

export default UsersList;
