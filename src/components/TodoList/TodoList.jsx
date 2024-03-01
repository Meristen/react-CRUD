import React from "react";
import { Button } from "../ui/Button";

const TodoList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h2>TODO List Component</h2>
      <ul>
        {props.todos.map((item) => (
          <li key={item.id}>
            <input
              onChange={() => props.handleChangeStatus(item.id)}
              type="checkbox"
            />
            <p
              style={{
                textDecoration: `${item.status ? "line-through" : "none"}`,
              }}
            >
              {item.todo}
            </p>
            <Button onClick={() => props.getEditedObj(item.id)} $primary>
              Edit
            </Button>
            <Button onClick={() => props.deleteTodo(item.id)} $red>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
