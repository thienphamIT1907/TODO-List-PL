import { useContext } from "react";
import TodoItem from "src/components/todo/v1/Item";
import ListStyled from "src/components/todo/v1/List/styles";
import { Context } from "src/context/todoContext";

const List = () => {
  const { setTodoList, fetchTodo, isShowScrollbar, todoList } =
    useContext(Context);
  return (
    <ListStyled isShowScrollbar={isShowScrollbar}>
      {todoList?.length > 0 ? (
        todoList
          .reverse()
          .map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todo={todoItem}
              fetchTodo={fetchTodo}
              setTodoList={setTodoList}
            />
          ))
      ) : (
        <h1> No Data </h1>
      )}
    </ListStyled>
  );
};

export default List;
