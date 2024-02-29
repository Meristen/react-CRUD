import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const AddTodo = ({ handleTodo }) => {
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo) {
      alert("input os empty");
      return;
    }
    const newTodo = {
      todo: todo,
      status: false,
      id: Date.now(),
    };
    handleTodo(newTodo);
    setTodo("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Add TODO component</h2>
      <Input type="text" value={todo} onChange={handleInput} />
      <div style={{ marginTop: "2em" }}>
        <Button onClick={handleAdd}>Add</Button>
      </div>
    </div>
  );
};

export default AddTodo;
