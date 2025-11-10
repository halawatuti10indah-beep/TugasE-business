import React from "react";

// Child menerima props dari Parent
function Hello(props) {
  return (
    <h1>Hello, nama saya {props.name}</h1>
  );
}

export default Hello;