import React from "react";
import { render } from "react-dom";
import Student from "./Student";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Student, { name: "mayur1" }),
    React.createElement(Student, { name: "piyush2" }),
    React.createElement(Student, { name: "anjali3" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
