import { useContext, useState } from "react";
import InputStyled from "src/components/todo/v1/Input/styles";
import axiosRequest from "src/config/axiosConfig";
import { Context } from "src/context/todoContext";


const Input = () => {
  const { setTodoList, fetchTodo } = useContext(Context);

  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [autoId, setAutoId] = useState(Math.floor(Math.random() * 100));

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleClick = async () => {
    const payload = {
      id: autoId,
      title: inputValue,
      isCompleted: false,
    };

    const response = await axiosRequest.post("/todos", payload);

    if (response.status === 201) {
      setInputValue("");
      setAutoId((prev) => prev + 1);
      const response = await fetchTodo();
      setTodoList(response?.data);
    }
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
