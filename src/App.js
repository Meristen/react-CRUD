import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/editTodo/EditTodo";

const App = () => {
  let [component, setComponent] = useState("todos");
  let [todos, setTodos] = useState([]);
  let [editedObj, setEditedObj] = useState(null);
  console.log(editedObj);

  const handleTodo = (newObj) => {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  };
  console.log(todos);
  const getEditedObj = (id) => {
    let foundObj = todos.find((item) => item.id === id);
    setEditedObj(foundObj);
    setComponent("edit");
  };
  const saveChanges = (newObj) => {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  };
  function deleteTodo(id) {
    let newTodos = [...todos];
    newTodos = newTodos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar setComponent={setComponent} />
      {component === "create" && <AddTodo handleTodo={handleTodo} />}
      {component === "todos" && (
        <TodoList
          deleteTodo={deleteTodo}
          getEditedObj={getEditedObj}
          todos={todos}
        />
      )}
      {component === "edit" && (
        <EditTodo
          setComponent={setComponent}
          saveChanges={saveChanges}
          setEditedObj={setEditedObj}
          editedObj={editedObj}
        />
      )}
    </>
  );
};

export default App;
