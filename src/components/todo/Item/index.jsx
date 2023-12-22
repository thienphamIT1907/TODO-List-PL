import { useState } from "react";
import CustomCheckbox from "../CustomCheckbox";
import ItemStyled from "./styles";

const TodoItem = ({ todo }) => {
  const { id, title, isCompleted } = todo;
  const [isChecked, setIsChecked] = useState(isCompleted);

  console.log("isChecked", isChecked);

  return (
    <ItemStyled
      onClick={(e) => {
        e.preventDefault();
        setIsChecked((prev) => !prev);
      }}
    >
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
