import React, { useState } from "react";
import { IState as Props } from "../App";

interface IState {
  todo: {
    name: string;
    time: number;
    id: number;
  }[];
  setTodos: React.Dispatch<React.SetStateAction<Props["todo"]>>;
}

const TaskList: React.FC<IState> = ({ todo, setTodos }) => {
  const deleteTask = (ajdi: number): void => {
    const reducedArr= todo.filter((task) => task.id !== ajdi);
    setTodos([...reducedArr]);
  };
  // const handleClick = (ide:number) =>{
  //   deleteTask(ide)
  // }

  const renderList = (): JSX.Element[] => {
    return todo.map((task) => {
      return (
        <div key={task.name} className="card m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{task.name},</h5>
            <h4 className="card-text">{task.time} minutes</h4>
            <button
              onClick={() => deleteTask(task.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  return <div className="row">{renderList()}</div>;
};

export default TaskList;
