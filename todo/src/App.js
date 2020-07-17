import React from 'react';
import TodoList from "./components/TodoList";



function App () {

  // const addTask = (e, item) => {
  //   e.preventDefault();
  //   const newTask = {
  //     name: item,
  //     id: Date.now(),
  //     done: false
  //   };
  //   this.setState({
  //     tasks: [...this.state.tasks, newTask]
  //   })
  // }

    return (
      <div className="app">
          <h1>To Do List</h1>
          <TodoList 
          />
      </div>
    )

    
}

export default App;
