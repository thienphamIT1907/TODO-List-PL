import { useState } from "react";
import axiosRequest from "../../../config/axiosConfig";
import CustomCheckbox from "../CustomCheckbox";
import ItemStyled from "./styles";

const TodoItem = ({ todo }) => {
  const { id, title, isCompleted } = todo;
  const [isChecked, setIsChecked] = useState(isCompleted);

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
      <img src="/src/assets/trash.png" alt="trash" />
    </ItemStyled>
  );
};

export default TodoItem;
