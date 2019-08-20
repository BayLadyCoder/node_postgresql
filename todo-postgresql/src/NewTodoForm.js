import React, { Component } from "react";
import "./NewTodoForm.css";
import uuid from "uuid";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid() };
    this.props.create(newTodo);
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <input
          type="text"
          name="todo"
          id="todo"
          value={this.state.task}
          placeholder="Add new todo..."
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
