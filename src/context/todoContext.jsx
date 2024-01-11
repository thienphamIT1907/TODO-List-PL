import { createContext, useState, useEffect } from "react";
import axiosRequest from "../config/axios";

export const Context = createContext();

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const [isShowScroll, setIsShowScroll] = useState(false);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    setTodoList(response.data);
  };

  const handleScroll = (length) => {
    if (length > 3) {
      setIsShowScroll(true);
    } else {
      setIsShowScroll(false);
    }
  };

  useEffect(() => {
    fetchTodo();
    handleScroll(todoList?.length);
  }, [todoList?.length]);

  return (
    <Context.Provider
      value={{
        todoList,
        fetchTodo,
        setTodoList,
        isShowScroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoContext;
