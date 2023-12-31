import { useContext, useState } from "react";
import CustomCheckbox from "src/components/todo/v1/CustomCheckbox";
import ItemStyled from "src/components/todo/v1/Item/styles";
import axiosRequest from "src/config/axiosConfig";
import { Context } from "src/context/todoContext";

const TodoItem = ({ todo, setIsShowConfirm, setSelectingId }) => {
  const { setTodoList, fetchTodo } = useContext(Context);
  const { id, title, isCompleted } = todo;
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleDeleteItem = async (e) => {
    e.stopPropagation();
    setIsShowConfirm(true);
    setSelectingId(id);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    setIsChecked((prev) => {
      axiosRequest.put(`/todos/${id}`, {
        ...todo,
        isCompleted: !prev,
      });
      return !prev;
    });
  };

  return (
    <ItemStyled onClick={handleItemClick}>
      <CustomCheckbox
        id={id}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <p className={`todo-content ${isChecked && "completed"}`}>{title}</p>
      <img src="/src/assets/trash.png" alt="trash" onClick={handleDeleteItem} />
    </ItemStyled>
  );
};

export default TodoItem;
