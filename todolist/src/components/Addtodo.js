import React, { Component } from "react";
import shortid from "shortid";

export default class Addtodo extends Component {
  state = {
    content: "",
  };
  handleChaneg = (e) => {
    this.setState({
      content: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content !== "") {
      this.props.addtodo({
        id: shortid(),
        content: this.state.content,
        editContent: false,
        compeleted: false,
        order: 1,
      });
      this.setState({
        content: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="row ">
          <div className="col s12 m8 l10 ">
            <label>Add new todo: </label>
            <input
              placeholder="Enter New Todo"
              type="text"
              className="white-text"
              value={this.state.content}
              onChange={this.handleChaneg}
            />
          </div>
          
          <button className="col s12 m4 l2 waves-effect waves-light btn-large ">ADD</button>
        </form>
      </div>
    );
  }
}
