import ListStyled from "./styles";
import Item from "../Item";
import { useContext } from "react";
import { Context } from "../../../context/todoContext";

const List = () => {
  const { todoList, isShowScroll } = useContext(Context);
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
