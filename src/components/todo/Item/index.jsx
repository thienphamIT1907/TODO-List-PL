import { useState } from "react";
import CustomCheckbox from "../CustomCheckbox";
import ItemStyled from "./styles";

const TodoItem = ({ todo }) => {
  const { id, title, isCompleted } = todo;
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleClick = (id) => {
    setIsChecked(!isChecked);
  };

  return (
    <ItemStyled onClick={() => handleClick(id)}>
      <CustomCheckbox id={id} isChecked={isChecked} />
      <p className={`todo-content ${isChecked && "completed"}`}>{title}</p>
      <img src="/src/assets/trash.png" alt="trash" />
    </ItemStyled>
  );
};

export default TodoItem;
