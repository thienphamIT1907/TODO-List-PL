import { createContext, useEffect, useState } from "react";
import axiosRequest from "src/config/axiosConfig";

export const Context = createContext([]);

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [isFetchingTodoList, setIsFetchingTodoList] = useState(false);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    return response;
  };

  useEffect(() => {
    setIsFetchingTodoList(true);
    (async () => {
      try {
        const response = await fetchTodo();
        setTodoList(response?.data);
        setIsFetchingTodoList(false);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        todoList,
        fetchTodo,
        setTodoList,
        isFetchingTodoList,
        setIsFetchingTodoList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoContext;
