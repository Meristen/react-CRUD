import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const EditTodo = ({ editedObj, setEditedObj, saveChanges, setComponent }) => {
  function editTodo(e) {
    setEditedObj({
      ...editedObj,
      todo: e.target.value,
    });
  }
  function handleSaveChanges() {
    saveChanges(editedObj);
    setComponent("todos");
  }
  return (
    <div>
      <h2>Edit Todo Component</h2>
      <Input onChange={editTodo} value={editedObj.todo} />
      <Button onClick={handleSaveChanges}>Save changes</Button>
    </div>
  );
};

export default EditTodo;
