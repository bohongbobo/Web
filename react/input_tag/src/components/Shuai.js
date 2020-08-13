import React, { Component } from "react";

export default class Tag extends Component {
  state = {
    tags: [],
    title: "",
    counter: 1,
    hasSameTitle: false,
    isInCorrectLength: false,
    isTagOver30: false,
    isOnlySpace: false,
    usersName: [],
    getTarget: false,
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          usersName: json,
        });
      });
  };

  handleInput = (e) => {
    if (e.target.value.length >= 0 && e.target.value.length < 20) {
      this.setState({ isInCorrectLength: false });
    } else {
      this.setState({ isInCorrectLength: true });
    }
    this.setState({
      title: e.target.value,
      hasSameTitle: false,
      isOnlySpace: false,
      getTarget: true,
    });
  };

  handleDelete = (id) => {
    let tempTodo = this.state.tags.filter((tag) => tag.id !== id);
    this.setState({ tags: tempTodo, hasSameTitle: false });
    if (this.state.tags.length <= 31) {
      this.setState({ isTagOver30: false });
    }
  };

  saveTag = (e) => {
    if (e.key === "Enter") {
      //console.log(this.state.counter);

      if (this.state.title.trim().length !== 0) {
        if (this.state.tags.length > 28) {
          this.setState({ isTagOver30: true });
        }

        if (this.state.title.length >= 0 && this.state.title.length < 20) {
          let hasSameTitle = false;
          this.state.tags.forEach((tag) => {
            if (tag.title.toLowerCase() === this.state.title.toLowerCase()) {
              hasSameTitle = true;
            }
          });
          this.setState({ hasSameTitle });
          if (hasSameTitle === false && this.state.isTagOver30 === false) {
            let tempTodo = {
              id: this.state.counter,
              title: this.state.title,
            };
            let newState = {
              tags: [...this.state.tags, tempTodo],
              counter: this.state.counter + 1,
              title: "",
            };
            this.setState(newState);
            this.setState({ isInCorrectLength: false });
          } else {
            this.setState({ isInCorrectLength: false });
          }
        }
      } else {
        this.setState({ isOnlySpace: true });
      }
    }
  };

  // showSearch = () => {
  //   let tempSearch = this.state.tags.map((item) => {
  //     return <div key={item.id}>{item.name}</div>;
  //   });
  //   // console.log(this.tempsearch);
  //   return tempSearch;
  // };

  //   completeAdd = (e) => {
  //     this.setState({
  //       title: e.target.innerText,
  //       tempAdd: [],
  //     });
  //   };

  // auto compelete -------------------------------------------------------------------------

  handleClick = (e) => {
    if (e.target.innerText.trim().length !== 0) {
      if (this.state.tags.length > 28) {
        this.setState({ isTagOver30: true });
      }

      if (e.target.innerText.length >= 0 && e.target.innerText.length < 20) {
        let hasSameTitle = false;
        this.state.tags.forEach((tag) => {
          if (tag.title.toLowerCase() === e.target.innerText.toLowerCase()) {
            hasSameTitle = true;
          }
        });
        this.setState({ hasSameTitle });
        if (hasSameTitle === false && this.state.isTagOver30 === false) {
          let tempTodo = {
            id: this.state.counter,
            title: e.target.innerText,
          };
          let newState = {
            tags: [...this.state.tags, tempTodo],
            counter: this.state.counter + 1,
            title: "",
          };
          this.setState(newState);
          this.setState({ isInCorrectLength: false });
        } else {
          this.setState({ isInCorrectLength: false });
        }
      } else {
        this.setState({
          isInCorrectLength: true,
        });
      }
    } else {
      this.setState({
        isOnlySpace: true,
      });
    }
    // this.setState({
    //   title: e.target.innerText,
    //   getTarget: !this.state.getTarget,
    // });
    console.log(e.target.innerText.length);
    console.log(this.state.isInCorrectLength);
  };

  searchOutput = () => {
    const filteredUser = this.state.usersName.filter((user) =>
      user.name.toLowerCase().includes(this.state.title.toLowerCase())
    );

    const searchTarget = filteredUser.map((user) => (
      <p key={user.id} onClick={this.handleClick} className="jsonUser">
        {user.name}
      </p>
    ));
    return searchTarget;
  };

  showOutput = () => {
    return !this.state.getTarget || this.state.title === "" ? "" : this.searchOutput();
  };

  render() {
    return (
      <div className="wraper">
        <div className="ShuaiGe">
          {this.state.tags.map((tag) => (
            <span className="singleTag" key={tag.id}>
              {tag.title}
              <span className="deleteButton">
                <button onClick={() => this.handleDelete(tag.id)}>X</button>
              </span>
            </span>
          ))}
          <input
            className="inputTag"
            onKeyPress={this.saveTag}
            value={this.state.title}
            onChange={this.handleInput}
          />
        </div>
        <div> {this.showOutput()}</div>
        <div className="hasSameTitle">
          {this.state.hasSameTitle ? "You cannot Add same Tag" : ""}
        </div>
        <div className="isItCorrect">
          {this.state.isInCorrectLength ? "over 20 characters" : ""}
        </div>
        <div className="isTagOver30">
          {this.state.isTagOver30 ? "Achieve the maximum amount of tags(30)" : ""}
        </div>
        <div className="isOnlySpace">
          {this.state.isOnlySpace ? "You cannot only add space" : ""}
        </div>
        {/* <div>{this.showSearch()}</div> */}
      </div>
    );
  }
}
