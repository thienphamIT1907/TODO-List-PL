import { useContext, useState } from "react";
import InputStyled from "./styles";
import axiosRequest from "../../../config/axios";
import { Context } from "../../../context/todoContext";

const Input = () => {
  const { setTodoList, fetchTodo } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [autoId, setAutoId] = useState(Math.floor(Math.random() * 100));
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
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
      setAutoId((pre) => pre + 1);
      const response = await fetchTodo();
      setTodoList(response?.data);
    }
  };

  return (
    <InputStyled>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        className={`plus-button ${isDisable ? "disable-btn" : ""}`}
        onClick={handleClick}
        disabled={isDisable}
      >
        <img src="/src/assets/plusbtn.png" alt="plusbtn" />
      </button>
    </InputStyled>
  );
};
export default Input;
