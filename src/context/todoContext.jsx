import { createContext, useEffect, useState } from "react";
import axiosRequest from "src/config/axiosConfig";

export const Context = createContext([]);

const TodoContext = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [isShowScrollbar, setIsShowScrollbar] = useState(false);

  const handleScroll = (length) => {
    if (length > 3) {
      setIsShowScrollbar(true);
    } else {
      setIsShowScrollbar(false);
    }
  };

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    setTodoList(response.data);
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
        isShowScrollbar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoContext;
