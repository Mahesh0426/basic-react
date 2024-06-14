import { useState } from "react";
import NumberDisplay from "./NumberDisplay";
import ResetButton from "./ResetButton";
const StateAsProp = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  return (
    <div>
      <NumberDisplay number={counterNumber} />
      <button onClick={() => setCounterNumber(counterNumber + 1)}>+</button>
      <ResetButton />
    </div>
  );
};
export default StateAsProp;
