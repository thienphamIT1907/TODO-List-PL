import { createContext, useEffect, useState } from "react";
import axiosRequest from "src/config/axiosConfig";

export const Context = createContext([]);

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [isFetchingTodoList, setIsFetchingTodoList] = useState(false);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    const todoListData = response?.data;
    if (todoListData?.length) todoListData.reverse();
    return todoListData;
  };

  useEffect(() => {
    setIsFetchingTodoList(true);
    (async () => {
      try {
        const data = await fetchTodo();
        setTodoList(data);
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
