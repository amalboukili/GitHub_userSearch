import React, { Component } from 'react';

class Search extends Component {
  state = {
    username: '',
  };
  mapInputToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchOnClickUser = () => {
    this.props.searchUsers(this.state.username);
    this.setState({ username: '' });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-horizontal">
            <div className="form-group">
              <div className="column col-10">
                <input
                  name="username"
                  className="form-input"
                  type="text"
                  placeholder="Enter a GitHub user to search..."
                  onChange={this.mapInputToState}
                />
              </div>
              <div className="column col-2">
                <button
                  className="btn btn-block"
                  style={{
                    backgroundColor: 'darkviolet',
                    color: 'rgb(200, 207, 221)',
                  }}
                  onClick={this.searchOnClickUser}
                >
                  <i className="fa fa-search" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
