import React, { Component } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

// Our Main Container holds the components: TaskInput, TodosList, & TasksCompleted
class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todos: [],
    };
    // this.handleInput = this.handleInput.bind(this);
  }

  //arrow function to avoid bind. by default in normal function this binds to window
  // in arrow function, there is no this. so it sees if it can find it in its current class component
  // and it can above in our constructor method

  //everytime state updates, the app re-renders
  // submit button REFRESHES as well as re-renders
  handleInput = (e) => {
    let value = e.target.value;
    this.setState({ value: value });
  };

  //when we hit the submit button, push state's value into
  // our todos array located on the state property of this
  handleSubmit = (e) => {
    // don't do this b/c you are mutating state:
    // this.state.todos.push()
    console.log(e);
    e.preventDefault();
    let submission = this.state.value;
    let arrCopy = this.state.todos.slice();
    arrCopy.push(submission);
    this.setState({ todos: arrCopy });
  };

  render() {
    return (
      <div>
        <Input
          handleInput={this.handleInput}
          value={this.state.value}
          handleSubmit={this.handleSubmit}
        />
        <List />
        <Completed />
      </div>
    );
  }
}

function Title() {
  return <h1>Tasks Doo</h1>;
}
// where the user will enter their task todo, it will then go to TodosList
function Input(props) {
  return (
    <form className="task-input-form" onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleInput} />
      <button>Submit</button>
    </form>
  );
}
// once the user has completed a task from TodosList, they click and button on TodosList item, and send it here
function Completed() {
  return (
    <span>
      <h2>Tasks Completed</h2>
      <ul></ul>
    </span>
  );
}
// after the user hits submit in the TaskCompleted component, the texts come to sit here
function List() {
  return (
    <span>
      <h2>To Do:</h2>
      <ul></ul>
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <MainContainer />
      {/* <header className="App-header">
        <h1>🍑</h1>
        <Counter />
      </header> */}
    </div>
  );
}

export default App;
