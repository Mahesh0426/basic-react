import { useState } from "react";

const LearnState = () => {
  //Js logic

  // state syntax
  //const [state, setState] = useState(IntialState);

  // Declare a state variable called 'name' and a function to update it
  const [name, setName] = useState("dented code");

  // Function to update the state when the button is clicked
  const handleOnClick = () => {
    setName("aanjan");
  };

  return (
    <div>
      {name}
      <button onClick={handleOnClick}>update name</button>
    </div>
  );
};

export default LearnState;
