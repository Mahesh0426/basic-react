import { useState } from "react";

const ColorToggle = () => {
  // div tag inline style  color red change to green using state
  const [color, setColor] = useState("red");

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        width: "150px",
        height: "150px",
      }}
    >
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>
        Button
      </button>
    </div>
  );
};
export default ColorToggle;
