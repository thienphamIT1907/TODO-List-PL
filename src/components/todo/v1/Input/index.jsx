import { useContext, useState } from "react";
import InputStyled from "src/components/todo/v1/Input/styles";
import axiosRequest from "src/config/axiosConfig";
import { Context } from "src/context/todoContext";
import { generateRandomId } from "src/utils/tools";

const Input = () => {
  const { setTodoList, fetchTodo, setIsFetchingTodoList } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleClick = async () => {
    setIsFetchingTodoList(true);
    setIsDisabled(true);

    const payload = {
      id: generateRandomId(),
      title: inputValue,
      isCompleted: false,
    };
    setInputValue("");
    const response = await axiosRequest.post("/todos", payload);

    if (response.status === 201) {
      const response = await fetchTodo();
      setTodoList(response?.data);
    }
    setIsFetchingTodoList(false);
    setIsDisabled(false);
  };
  return (
    <InputStyled>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        onClick={handleClick}
        className={`plus-button ${isDisabled ? "disabled-btn" : ""}`}
        disabled={isDisabled}
      >
        <img src="/src/assets/add-todo.png" alt="plusbtn" />
      </button>
    </InputStyled>
  );
};
export default Input;
