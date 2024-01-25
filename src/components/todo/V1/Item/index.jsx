import { useContext, useState } from "react";
import CustomCheckbox from "../CustomCheckbox";
import ItemStyled from "./styles";
import axiosRequest from "../../../../config/axios";
import { Context } from "src/context/todoContext";

const Item = ({ todo }) => {
  const { setTodoList, fetchTodo } = useContext(Context);
  const { id, title, isCompleted } = todo;

  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleDeleteItem = async (e) => {
    e.stopPropagation();
    const response = await axiosRequest.delete(`/todos/${id}`);
    if (response.status === 200) {
      const latestTodoList = await fetchTodo();
      setTodoList(latestTodoList?.data);
    }
  };

  const handleClickItem = (e) => {
    e.preventDefault();
    setIsChecked((pre) => {
      axiosRequest.put(`/todos/${id}`, {
        ...todo,
        isCompleted: !pre,
      });
      return !pre;
    });
  };

  return (
    <ItemStyled onClick={handleClickItem}>
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

export default Item;
