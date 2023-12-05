import React, { useRef, useState } from "react";

export default function ToDo() {
  const [task, settask] = useState([]);
  const inputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    settask([...task, inputRef.current.value]);
    inputRef.current.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"></input>
        <button type="submit">end</button>
      </form>
      <ol>
        {task.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
}
