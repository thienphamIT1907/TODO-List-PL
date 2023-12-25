import TodoItem from "../Item";
import ListStyled from "./styles";

const List = ({ todoList, isShowScrollbar }) => {
  return (
    <ListStyled isShowScrollbar={isShowScrollbar}>
      {todoList?.length > 0 ? (
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
