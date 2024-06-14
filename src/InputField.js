const InputField = (props) => {
  const { type, id, placeholder } = props;
  //Logic

  return <input type={type} id={id} placeholder={placeholder} />;
};
export default InputField;
