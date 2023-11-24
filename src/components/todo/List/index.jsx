import { todoMock } from "../../../data/todo_mock";
import Item from "../Item";
import ListStyled from "./styles";

const List = () => {
  // useEffect call API, setData
  return (
    <ListStyled>
      {todoMock.length > 0 ? (
        todoMock.map((todo) => <Item todo={todo} key={todo.id} />)
      ) : (
        <h1>No data</h1>
      )}
    </ListStyled>
  );
};

export default List;
