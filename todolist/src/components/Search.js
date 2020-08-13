import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleSearchChange } = this.props;
    return (
      <div>
        <form className="row">
          <div className="col s12 m12 l12">
            <label>Search todo: </label>
            <input type="search" className="white-text" placeholder="Search"
 onChange={handleSearchChange} />
          </div>
        </form>
      </div>
    );
  }
}

