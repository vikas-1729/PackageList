import { useEffect, useState } from "react";
import useUserInput from "./useUserInput";

const Book = () => {
  const nameInput = useUserInput("");
  const authorInput = useUserInput("");
  const obj = {
    a: "hello",
  };
  console.log({ ...nameInput });

  return (
    <div>
      <div className="book">
        <h1>Name</h1>
        <input type="text" name="name" id="name" {...nameInput} />
        <h1>Author</h1>
        <input type="text" name="author" id="author" {...authorInput} />
      </div>
    </div>
  );
};

export default Book;
