import { useContext } from "react";
import TodoItem from "src/components/todo/v1/Item";
import ListStyled from "src/components/todo/v1/List/styles";
import { Context } from "src/context/todoContext";

const EMPTY_DATA = 0;
const ENABLE_SCROLL_LIMIT = 3;

const List = () => {
  const { todoList } = useContext(Context);
  const dataLength = todoList?.length;
  const isShowScrollbar = dataLength > ENABLE_SCROLL_LIMIT;
  const hasData = dataLength > EMPTY_DATA;

  return (
    <ListStyled isShowScrollbar={isShowScrollbar}>
      {hasData ? (
        todoList
          .reverse()
          .map((todoItem) => <TodoItem key={todoItem.id} todo={todoItem} />)
      ) : (
        <h1> No Data </h1>
      )}
    </ListStyled>
  );
};

export default List;
