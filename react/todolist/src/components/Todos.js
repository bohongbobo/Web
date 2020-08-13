import React, { Component } from "react";
import Todoitem from "./Todoitem.js";

export default class Todos extends Component {
  render() {
    const { deletetodo, toggleEdit, saveNewtodo, saveNewOrder, toggleCompeleted } = this.props;
    return (
      <div>
        {this.props.todos
          .sort((a, b) => a.order - b.order)
          .map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
              deletetodo={deletetodo}
              toggleEdit={toggleEdit}
              saveNewtodo={saveNewtodo}
              saveNewOrder={saveNewOrder}
              toggleCompeleted={toggleCompeleted}
            />
          ))}
      </div>
    );
  }
}
