import React, { useState } from "react";

const TodoForm = (props) => {
  // membuat useState untuk input
  const [input, setInput] = useState("");

  // membuat function untuk inputHandler
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // function onSubmit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Harap Masukkan input");
      return;
    }

    props.fnTodos(input);
    setInput("");
  };
  // membuat UI
  return (
    <form style={{ margin: "2em 0em" }} onSubmit={onSubmitHandler}>
      <input type="text" name="todo-baru" id="todoBaru" placeholder="Masukkan Input Anda" style={{ marginRight: "0.5em" }} input={input} onChange={inputHandler} />
      <button type="submit">Tambah To-Do</button>
      <div className="info">
        <p>{`Total List ${props.length}`}</p>
      </div>
    </form>
  );
};

export default TodoForm;
