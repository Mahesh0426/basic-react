const Condition = () => {
  // using if else condition to check even or odd number
  const num = 6;
  if (num % 2 === 0) {
    return <h1>{num} is even number</h1>;
  } else {
    return <h1>{num} is odd number</h1>;
  }
};
export default Condition;
