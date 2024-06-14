const Number = () => {
  const addNum = [1, 2, 3, 4, 5];

  return (
    <div>
      {addNum.map((num) => (
        <b>{num + 2 + "  "}</b>
      ))}
    </div>
  );
};
export default Number;
