import React, { Component } from "react";
import "./AutoCompelete.css";

export default class AutoCompelete extends Component {
  state = {
    users: [],
    searchInput: "",
    getTarget: false,
  };
  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
      getTarget: true,
    });
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          users: data,
        })
      );
  };

  handleClick = (e) => {
    this.setState({
      searchInput: e.target.innerText,
      getTarget: !this.state.getTarget,
    });
  };

  searchOutput = () => {
    const filteredUser = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );

    const searchTarget = filteredUser.map((user) => (
      <p key={user.id} onClick={this.handleClick}>
        {user.name}
      </p>
    ));
    return searchTarget;
  };

  showOutput = () => {
    return !this.state.getTarget || this.state.searchInput === "" ? "" : this.searchOutput();
  };

  render() {
    return (
      <div className="autocompelete">
        <div className="input">
          <h4>Auto Complete</h4>
          <p>Enter text</p>
          <input
            className="autoinput"
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
          {this.showOutput()}
        </div>
      </div>
    );
  }
}
