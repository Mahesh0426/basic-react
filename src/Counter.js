import { useState } from "react";
const Counter = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setCounterNumber(counterNumber - 1)}>-</button>
      {counterNumber}
      <button onClick={() => setCounterNumber(counterNumber + 1)}>+</button>
    </div>
  );
};
export default Counter;
