import "./App.css";
import img from "./images/to-do-list.png";
import { Component } from "react";

class App extends Component {
  state = {
    listTask: [],
    task: "",
  };
  updateTask = (e) => {
    this.setState({ task: e.target.value });
  };

  addTask = () => {
    const obj = {
      name: this.state.task,
    };
    if (this.state.task !== "") {
      this.setState({ listTask: this.state.listTask.concat(obj) });
      this.setState({ task: "" });
    }
  };

  render() {
    const myTask = this.state.listTask.map((item) => (
      <li className="todo_item">{item.name}</li>
    ));

    return (
      <div className="App">
        <img src={img} alt="to-do-img" />

        <div className="todo">
          <h1>To Do List</h1>
          <br />
          <input
            placeholder="Add your task"
            value={this.state.task}
            onChange={this.updateTask}
          />
          <button onClick={this.addTask}>Add Task</button>
          <ul className="list">{myTask}</ul>
        </div>
      </div>
    );
  }
}

export default App;
