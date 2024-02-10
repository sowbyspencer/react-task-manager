import React from "react";

function Header() {
  return (
    <header style={style.header}>
      <h1 style={style.h1}>Task Manager</h1>
    </header>
  );
}

// Inline CSS styles
const style = {
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px",
    textAlign: "center",
    margin: '0',
    boxSizing: 'border-box',
  },
  h1: {
    margin: '0',
    padding: '0',
  }
};



export default Header;
