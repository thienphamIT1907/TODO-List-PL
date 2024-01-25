import { createContext, useState, useEffect } from "react";
import axiosRequest from "../config/axios";

export const Context = createContext();

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    return response;
  };

  useEffect(() => {
    (async () => {
      const response = await fetchTodo();
      setTodoList(response?.data);
    })();
    // handleScroll(todoList?.length);
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
