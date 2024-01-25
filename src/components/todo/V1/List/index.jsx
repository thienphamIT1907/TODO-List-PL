import ListStyled from "./styles";
import Item from "../Item";
import { useContext } from "react";
import { Context } from "../../../../context/todoContext";

const EMPTY_DATA = 0;
const ENABLE_DATA = 3;

const List = () => {
  const { todoList } = useContext(Context);
  const dataLength = todoList.length;
  const hasData = dataLength > EMPTY_DATA;
  const isShowScroll = dataLength > ENABLE_DATA;
  const renderData = () => {
    if (hasData) {
      return todoList
        .reverse()
        .map((todoItem) => <Item key={todoItem.id} todo={todoItem} />);
    }

    return <h1> No Data </h1>;
  };
  return <ListStyled isShowScroll={isShowScroll}>{renderData()}</ListStyled>;
};

export default List;
