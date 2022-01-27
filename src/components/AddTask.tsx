import React, { useState } from "react";
import { IState as Props } from "../App";

interface IState {
  todo: Props["todo"];
  setTodos: React.Dispatch<React.SetStateAction<Props["todo"]>>;
}

const AddTask: React.FC<IState> = ({ todo, setTodos }) => {
  const [input, setInput] = useState({
    name: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    setTodos([
      ...todo,
      { name: input.name, time: parseInt(input.time), id: Date.now() },
    ]);
    setInput({ name: "", time: "" });
    console.log(todo);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <input
        className="input m-2"
        placeholder="Task"
        type="text"
        onChange={handleChange}
        value={input.name}
        name="name"
      ></input>
      <input
        className="input m-2"
        placeholder="time in minutes"
        type="number"
        onChange={handleChange}
        value={input.time}
        name="time"
      ></input>
      <button onClick={handleClick} className="btn btn-primary m-2">
        {" "}
        Add
      </button>
    </div>
  );
};

export default AddTask;
