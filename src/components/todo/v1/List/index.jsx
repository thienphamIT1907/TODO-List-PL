import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import ConfirmModal from "src/components/todo/v1/ConfirmModal";
import EmptyData from "src/components/todo/v1/EmptyData";
import TodoItem from "src/components/todo/v1/Item";
import ListStyled from "src/components/todo/v1/List/styles";
import LoadingData from "src/components/todo/v1/Loading";
import { Context } from "src/context/todoContext";

const EMPTY_DATA = 0;
const ENABLE_SCROLL_LIMIT = 3;

const List = () => {
  const { todoList, isFetchingTodoList } = useContext(Context);
  const dataLength = todoList?.length;
  const isShowScrollbar = dataLength > ENABLE_SCROLL_LIMIT;
  const hasData = dataLength > EMPTY_DATA;
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [selectingId, setSelectingId] = useState("");

  // TODO: Convert this logic to factory pattern
  return (
    <ListStyled isShowScrollbar={isShowScrollbar}>
      {isFetchingTodoList ? (
        <LoadingData />
      ) : (
        <>
          {hasData ? (
            todoList
              .reverse()
              .map((todoItem) => (
                <TodoItem
                  key={todoItem.id}
                  todo={todoItem}
                  setIsShowConfirm={setIsShowConfirm}
                  setSelectingId={setSelectingId}
                />
              ))
          ) : (
            <EmptyData />
          )}
        </>
      )}
      {isShowConfirm &&
        createPortal(
          <ConfirmModal
            setIsShowConfirm={setIsShowConfirm}
            selectingId={selectingId}
          />,
          document.body
        )}
    </ListStyled>
  );
};

export default List;
