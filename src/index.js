import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const {
    todo,
    todoList,
    handleChange,
    handleRemove,
    handleSubmit
  } = useLogic();
  return (
    <div className="App">
      <p>Todo List</p>
      {todoList.map((item, i) => {
        return (
          <div key={i}>
            <p>
              {i + 1}: {item} &nbsp;&nbsp;
              <button onClick={() => handleRemove(i)}>x</button>
            </p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

function useLogic() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["todo1"]);
  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  function handleRemove(index) {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }
  return {
    todo,
    todoList,
    handleChange,
    handleRemove,
    handleSubmit
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
