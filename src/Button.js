const Button = (props) => {
  // logic
  // pass unclick button as function as props

  const { buttonText, buttonFunction } = props;

  return <button onClick={buttonFunction}>{buttonText}</button>;
};

export default Button;
