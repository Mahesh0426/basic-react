const FilterAge = () => {
  const ages = [10, 20, 30, 40];
  const fages = ages.filter((age) => age > 20);
  return (
    <div>
      <h1>{"age gretaer than 20: " + fages}</h1>
    </div>
  );
};
export default FilterAge;
