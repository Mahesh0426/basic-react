// function which is a component,functional component
const DateTime = () => {
   // JS CODE  | logic here
    //return UI
  return (
    // HTML here
    <div>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

//make it available to other files, export the component
export default DateTime;
