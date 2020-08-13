import React, { Component } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo.js";
import Todos from "./components/Todos.js";
import Search from "./components/Search.js";

export default class App extends Component {
  state = {
    todos: [],
    searchField: "",
    sectionToShow: "all",
  };

  addtodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
    console.log(this.state.todos);
  };

  deletetodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  handleSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
    console.log(e.target.value);
  };

  toggleEdit = (id) => {
    const editTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // console.log(todo.editContent);
        return { ...todo, editContent: !todo.editContent };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: editTodo,
    });
  };

  saveNewtodo = (id, content) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo.id === id ? { ...todo, editContent: !todo.editContent, content } : todo;
      }),
    });
  };

  saveNewOrder = (id, order) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo.id === id ? { ...todo, order } : todo;
      }),
    });
    console.log(this.state.order);
  };

  toggleCompeleted = (id) => {
    const compeletedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // console.log(todo.editContent);
        return { ...todo, compeleted: !todo.compeleted };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: compeletedTodo,
    });
  };

  updateShowSection = (button) => {
    this.setState({
      sectionToShow: button,
    });
    console.log(button);
  };

  render() {
    let todos = [];

    if (this.state.sectionToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.sectionToShow === "processing") {
      todos = this.state.todos.filter((todo) => !todo.compeleted);
    } else if (this.state.sectionToShow === "done") {
      todos = this.state.todos.filter((todo) => todo.compeleted);
    }

    const filteredTodos = todos.filter((todo) => {
      return todo.content.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TodoList</h1>
        <Addtodo addtodo={this.addtodo} />
        <Search handleSearchChange={this.handleSearchChange} />
        <div className="row">
          <button
            className="col s12 m4 l4 waves-effect waves-light btn-large"
            onClick={() => this.updateShowSection("all")}
          >
            All
          </button>
          <button
            className="col s12 m4 l4 waves-effect waves-light btn-large"
            onClick={() => this.updateShowSection("processing")}
          >
            Processing
          </button>
          <button
            className="col s12 m4 l4 waves-effect waves-light btn-large"
            onClick={() => this.updateShowSection("done")}
          >
            Done
          </button>
        </div>
        <Todos
          todos={filteredTodos}
          deletetodo={this.deletetodo}
          toggleEdit={this.toggleEdit}
          saveNewtodo={this.saveNewtodo}
          saveNewOrder={this.saveNewOrder}
          toggleCompeleted={this.toggleCompeleted}
        />
      </div>
    );
  }
}
