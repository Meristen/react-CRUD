import React from "react";
import { Button } from "../ui/Button";

const Navbar = ({ setComponent }) => {
  return (
    <div
      style={{
        minHeight: "80px",
        width: "100%",
        display: "flex",
        gap: "20px",
        justifyContent: "flex-end",
        backgroundColor: "gray",
        position: "sticky",
        top: 0,
      }}
    >
      <Button onClick={() => setComponent("create")}>Create</Button>
      <Button onClick={() => setComponent("todos")}>Todos</Button>
    </div>
  );
};

export default Navbar;
