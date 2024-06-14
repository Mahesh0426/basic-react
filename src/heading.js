import DateTime from "./dateTime";
const Heading = () => {
  const sum = 2 + 2;

  return (
    <div>
      <h1>Hello World!</h1>
      <DateTime />
      <h1>{sum}</h1>
    </div>
  );
};
export default Heading;
