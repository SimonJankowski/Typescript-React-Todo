import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";


export interface IState{todo:{
  name: string
  time: number;
  id: number;
}[];
}

function App() {
  const [todos, setTodos] = useState<IState["todo"]>([
    {
      name:"Walk The dog",
      time: 15,
      id:1
    },
    {
      name:"Unload dishwasher",
      time: 10,
      id:2
    },
  ]);

  return (
    <div className="App">
      <div className="container d-block">
          <TaskList todo={todos} setTodos={setTodos}/>
      <AddTask todo={todos} setTodos={setTodos}/>
    </div>
    </div>
  );
}

export default App;
