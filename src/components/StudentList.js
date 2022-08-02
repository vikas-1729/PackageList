// import React from "react";
import Student from "./Student";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement(Student, { name: "mayur1" }),
//     React.createElement(Student, { name: "piyush2" }),
//     React.createElement(Student, { name: "anjali3" }),
//   ]);
// };

// export default App;

const StudentList = () => {
  const studentList = [
    {
      name: "abc",
    },
    {
      name: "vikas",
    },
    {
      name: "piyush",
    },
    {
      name: "mama",
    },
    {
      name: "hello",
    },
  ];
  return (
    <div>
      {studentList.map((studentObject, index) => {
        return <Student key={index} name={studentObject.name} />;
      })}
    </div>
  );
};

export default StudentList;
