import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <div className="Todo-task">{this.props.task}</div>
        <button className="remove" onClick={this.props.remove}>
          X
        </button>
      </div>
    );
  }
}

export default Todo;
