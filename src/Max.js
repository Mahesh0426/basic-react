const Max = () => {
  const arr = [3, 6, 8, 9, 2, 4, 5];

  return <div>{arr.reduce((acc, curr) => Math.max(acc, curr))}</div>;
};
export default Max;
