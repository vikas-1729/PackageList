import { useState } from "react";

const useUserInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    console.log("handle");
    setValue(e.target.value);
  }

  return {
    value: value,
    onChange: handleValueChange,
  };
};

export default useUserInput;
