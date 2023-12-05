import React, { useRef, useState } from "react";

export default function ToDo() {
  const [task, settask] = useState([]);
  const inputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    settask([
      ...task,
      {
        id: task.length + 1,
        name: inputRef.current.value,
        complete: false,
      },
    ]);
    inputRef.current.value = "";
  }
  function changeStatus(cur_task) {
    const updatedTasks = task.map((item) => {
      if (cur_task.id === item.id) return { ...item, complete: !item.complete };
      else return item;
    });
    settask(updatedTasks);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"></input>
        <button type="submit">add</button>
      </form>
      <ol>
        {task.map((item, index) => {
          const completedStyle = item.complete
            ? { "text-decoration": "line-through" }
            : {};
          return (
            <li style={completedStyle} onClick={() => changeStatus(item)}>
              {item.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
