import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  //Logic

  return (
    <div>
      {/*component are reusable*/}
      <InputField type="email" id="email" placeholder="Enter your email" />

      <InputField type="text" id="phone" placeholder="Enter your Phone" />

      <Button
        buttonText="click me"
        buttonFunction={() => {
          alert("hello");
        }}
      />
    </div>
  );
};
export default Form;
