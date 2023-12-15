import { useState } from "react";
import axiosRequest from "../../../config/axiosConfig";
import InputStyled from "./styles";

const Input = () => {
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
