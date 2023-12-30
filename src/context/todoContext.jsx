import { createContext, useEffect, useState } from "react";
import axiosRequest from "src/config/axiosConfig";

export const Context = createContext([]);

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    return response;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchTodo();
        setTodoList(response?.data);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoContext;
