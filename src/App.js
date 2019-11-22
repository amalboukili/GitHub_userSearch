import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar.component';
import Alert from './components/layout/Alert.component';
import Search from './components/layout/Search.component';
import UsersGrid from './components/users/UsersGrid.component';
import * as config from './envConfig';
import './App.css';
// import Spinner from './components/layout/Spinner.component';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // componentDidMount() {
  //   console.log(process.env);
  // }
  searchUsers = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecret}&q=${username}`,
    );
    console.log(response);
    if (response.status === 200 && response.statusText === 'OK') {
      this.setState({ users: response.data.items });
    }
    this.setState({ loading: false });
    // else{
    // ! alert pas de users
    // }
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Alert />
        <Search searchUsers={this.searchUsers} />
        <UsersGrid users={this.state.users} loading={this.state.loading} />
        {/* <Spinner /> */}
      </div>
    );
  }
}

export default App;
