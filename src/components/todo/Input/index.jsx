import InputStyled from "./styles";

const Input = () => {
  const handleClick = () => {
    console.log("ADD....");
  };
  return (
    <InputStyled>
      <input type="text" />
      <img
        src="/src/assets/add-todo.png"
        alt="plus"
        className="add-button"
        onClick={handleClick}
      />
    </InputStyled>
  );
};

export default Input;
