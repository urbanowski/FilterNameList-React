import React, { Component } from 'react';
import logo from './logo.svg';
import UsersList from './UsersList';
import './App.css';

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Adonis'];

class App extends Component {
  constructor(){
    super();

    this.state = {
      filteredUsers: allUsers
    };
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Filtrowanie listy</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onInput={this.filterUsers.bind(this)}/>
        <UsersList users={this.state.filteredUsers}/>
      </div>
    );
  }

  filterUsers(e){
      const text = e.currentTarget.value;
      const filteredUsers = this.getFilteredUsersForText(text)
      this.setState(
                    {
                        filteredUsers
                    }
      )
  }

  getFilteredUsersForText(text){
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }
}

export default App;
