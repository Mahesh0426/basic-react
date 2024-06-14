const Concat = () => {
  const front = ["HTML", "CSS", "JS", "React"];
  const backends = ["Node", "MongoDB", "Express", "Python"];

  return (
    <div>
      <p> {front.concat(backends) + " \t "}</p>
    </div>
  );
};
export default Concat;
