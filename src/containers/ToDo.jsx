import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable";

const Todo = (props) => {
  // mendeklarasikan suatu data didalam container todo agar reactif dengan menggunakan useState
  // menampung data useState untuk variabel todos, dan memberi untuk function setTodos
  const [todos, setTodos] = useState([
    { id: 1, Username: "Moh Agus Setiawan", isCompleted: true },
    { id: 2, Username: "Suci Wulandari", isCompleted: false },
    { id: 3, Username: "Putri Dwi Yanti", isCompleted: false },
  ]);

  // membuat fungsi Addtodos melalui button trigger
  const addTodos = (TodoBaru) => {
    const newId = todos[todos.length - 1].id + 1;
    const ObjTodoBaru = {
      id: newId,
      Username: TodoBaru,
      isCompleted: false,
    };

    const todosBaru = [...todos, ObjTodoBaru];
    setTodos(todosBaru);
  };

  // completed todos
  const completeTodos = (idTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idTodo) {
        todo.isCompleted = true;
      }

      return todo;
    });
    setTodos(newTodos);
  };
  // membuat UI untuk render
  return (
    <>
      <div>Membuat Todos</div>
      <div>
        <TodoForm fnTodos={addTodos} />
        <TodoTable todos={todos} completeTodo={completeTodos} />
      </div>
    </>
  );
};

export default Todo;
