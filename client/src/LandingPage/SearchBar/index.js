import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
          type="text"
          name="name"
          placeholder="Enter Your Name Here"
          
          >
          </input>
          <input
          type="text"
          name="searchTerm"
          placeholder="Search Quiz"
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
          >
          </input>
          <button type="submit">Enter
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
