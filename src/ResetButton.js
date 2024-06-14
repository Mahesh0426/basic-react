const resetButton = (props) => {
  const { setCounterNumber } = props;
  const handleOnClick = () => {
    setCounterNumber(0);
  };

  return <button onClick={handleOnClick}>Reset</button>;
};
export default resetButton;
