import { useEffect, useState } from "react";
import axiosRequest from "../../../config/axiosConfig";
import TodoItem from "../Item";
import ListStyled from "./styles";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [isShowScrollbar, setIsShowScrollbar] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axiosRequest("/todos");
      setTodoList(response.data);

      if (response.data.length > 3) {
        setIsShowScrollbar(true);
      } else {
        setIsShowScrollbar(false);
      }
    };
    fetchTodo();
  }, []);

  return (
    <ListStyled isShowScrollbar={isShowScrollbar}>
      {todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todo={todoItem} />
        ))
      ) : (
        <h1> No Data </h1>
      )}
    </ListStyled>
  );
};

export default List;
