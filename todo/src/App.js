import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [
  {
    name: "Code",
    id: 1,
    done: false
  },
  {
    name: "Eat",
    id: 2,
    done: false
  },
  {
    name: "Sleep",
    id: 1,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  };

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      name: item,
      id: Date.now(),
      done: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

  clearDone = e => {
    e.preventDefault();
    // if item is done (item.done is true) then filter out
    this.setState({
      tasks: this.state.tasks.filter(item => !item.done)
    });
  };

  render() {
    return (
      <div className="app">
        <header>
          <h1>To Do List</h1>
        </header>
        <body>
          <TodoForm addTask={this.addTask}/>
          <TodoList 
            toggleItem = {this.toggleItem}
            tasks = {this.state.tasks}
            clearDone = {this.clearDone}
          />
        </body>
      </div>
    )
  }
    
}

export default App;
