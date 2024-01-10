import React, { useRef, useState } from "react";

const Home = () => {
  const [todos, setToDos] = useState([]);
  const inputRef = useRef();

  const handleAddTask = () => {
    const task = inputRef.current.value;
    const newItem = { completed: false, task };
    setToDos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    let updatedTodos = todos.slice();
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setToDos(updatedTodos);
  };

  const handleDelete = (index) => {
    let filteredTodos = todos.filter((item, i) => index !== i);
    setToDos(filteredTodos);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" placeholder="Enter Task" ref={inputRef} />
      <button onClick={handleAddTask}>Add</button>
      {todos.map(({ task, completed }, index) => {
        return (
          <div>
            <li
              // className={`cursor-pointer ${completed ? "line-through" : ""}`}
              style={{ textDecoration: completed ? "line-through" : "" }}
              key={index}
              onClick={() => handleItemDone(index)}
            >
              {task}
            </li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
