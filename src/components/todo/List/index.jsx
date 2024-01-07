import ListStyled from "./styles";
import Item from "../Item";

const List = ({ todoList, isShowScroll }) => {
  return (
    <ListStyled isShowScroll={isShowScroll}>
      {todoList?.length > 0 ? (
        todoList
          .reverse()
          .map((todoItem) => <Item key={todoItem.id} todo={todoItem} />)
      ) : (
        <h1> No Data </h1>
      )}
    </ListStyled>
  );
};

export default List;
