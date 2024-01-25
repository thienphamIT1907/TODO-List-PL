import Container from "./components/todo/V1/Container";
import TodoContext from "./context/todoContext";

function App() {
  return (
    <TodoContext>
      <Container />
    </TodoContext>
  );
}

export default App;
