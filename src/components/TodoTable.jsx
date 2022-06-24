import React from "react";

const TodoTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nama</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.Username}</td>
              <td>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</td>
              <td>{todo.isCompleted ? "" : <button onClick={() => props.completeTodo(todo.id)}>Selesai</button>}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
