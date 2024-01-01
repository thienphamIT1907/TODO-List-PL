import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "src/components/todo/v1/Container";
import { toastifyConfig } from "src/config/toastifyConfig";
import TodoContext from "src/context/todoContext";

function App() {
  return (
    <TodoContext>
      <Container />
      <ToastContainer {...toastifyConfig} />
    </TodoContext>
  );
}

export default App;
