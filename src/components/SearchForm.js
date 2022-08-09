import { useState } from "react";
import useUserInput from "./useUserInput";
//hhoks -->
const SearchForm = () => {
  const [name, setName] = useState("vikas");
  const nameInput = useUserInput("vikas");
  if (name === "vikas") {
    console.log("in");
    var [surname, setSurname] = useState("singh");
  }
  const [pass, setPass] = useState("true");
  console.log(pass);
  return (
    <div>
      <h1>{name + " " + surname + " " + pass} </h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          {...nameInput}
          placeholder="Write your name !!"
        />
      </form>
    </div>
  );
};

export default SearchForm;
