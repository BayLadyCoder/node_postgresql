import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import axios from "axios";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    const url = "/api/todos";
    const res = await axios.get(url);
    console.log(res);
    console.log(res.data);
    const data = res.data;
    console.log(data);
    this.setState({ data: data });
    console.log(this.state.data);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    });
  }

  render() {
    let todos = this.state.todos.map(todo => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          remove={() => this.remove(todo.id)}
        />
      );
    });
    return (
      <div className="TodoList">
        <NewTodoForm create={this.create} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
