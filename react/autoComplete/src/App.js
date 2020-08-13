import React, { Component } from "react";
import { debounce } from "lodash";
import "./App.css";

export default class App extends Component {
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
      <h2 key={user.id} onClick={this.handleClick}>
        {user.name}
      </h2>
    ));
    return searchTarget;
  };

  showOutput = () => {
    return !this.state.getTarget || this.state.searchInput === "" ? "" : this.searchOutput();
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.searchInput} onChange={this.handleChange} />
        {this.showOutput()}
      </div>
    );
  }
}
