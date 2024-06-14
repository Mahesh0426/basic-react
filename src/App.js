import logo from "./logo.svg";
import "./App.css";
import UserList from "./userList";
import Title from "./Title";
import Form from "./Form";
import LearnState from "./LearnState";
import Counter from "./Counter";
import ColorToggle from "./ColorToggle";
import StateAsProp from "./StateAsProp";
import TodoList from "./TodoList/todoList";
import Cart from "./CartList/Cart";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <Title />
      <Form />
      <hr />
      <LearnState />
      <hr />
      <Counter />
      <hr />
      <ColorToggle />
      <hr />
      <StateAsProp />
      <hr />
      <TodoList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
