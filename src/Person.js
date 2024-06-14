const Person = () => {
  const person = {
    firstName: "alex",
    lastName: "sedai",
    id: 55,
  };
  // pusing age of person
  return (
    <div>
      <h1>
        {"Fisrtname: " + person.firstName} <br />
        {"Lastname: " + person.lastName} <br />
        {"ID: " + person.id} <br />
        {"age: " + (person.age = 24)}
      </h1>
    </div>
  );
};
export default Person;
