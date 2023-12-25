import Container from "./components/todo/Container";
import TodoContext from "./context/todoContext";

function App() {
  return (
    <TodoContext>
      <Container />
    </TodoContext>
  );
}

export default App;
