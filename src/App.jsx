import Container from "src/components/todo/v1/Container";
import TodoContext from "src/context/todoContext";

function App() {
  return (
    <TodoContext>
      <Container />
    </TodoContext>
  );
}

export default App;
