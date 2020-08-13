import React, { Component } from "react";

export default class Addtag extends Component {
  state = {
    tags: [],
    content: "",
    maxTags: false,
    maxContent: false,
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.content !== "" &&
      this.state.content.length < 10 &&
      this.state.content.trim().length !== 0 &&
      this.state.tags.length < 5
    ) {
      const newTag = {
        content: this.state.content,
        id: Math.random(),
      };
      this.setState({
        tags: [...this.state.tags, newTag],
        content: "",
      });
    } else if (this.state.content.length >= 10) {
      this.setState({
        tags: this.state.tags,
        maxContent: !this.state.maxContent,
      });
    } else if (this.state.tags.length >= 5) {
      this.setState({
        tags: this.state.tags,
        maxTags: !this.state.maxTags,
      });
    } else {
      this.setState({
        tags: this.state.tags,
      });
    }
    console.log(this.state.content.length, "content");
    console.log(this.state.maxContent);

    console.log(this.state.tags.length, "tags");
    console.log(this.state.maxTags);
  };

  handleDelete = (id) => {
    const filtered = this.state.tags.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      tags: filtered,
    });
  };

  render() {
    return (
      <div>
        <div className="container" htmlFor="input">
          {this.state.tags.map((tag) => (
            <span key={tag.id} className="singleTag">
              {tag.content}
              <span onClick={() => this.handleDelete(tag.id)} className="button">
                X
              </span>
            </span>
          ))}
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.content} onChange={this.handleChange} id="input" />
          </form>
        </div>
        <div className="warning">
          {this.state.maxTags === true ? "Cannot have more than 5 tags" : ""}
        </div>
        <div className="warning">
          {this.state.maxContent === true ? "Cannot have more than 20 letter" : ""}
        </div>
      </div>
    );
  }
}
