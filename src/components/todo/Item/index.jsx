import ItemStyled from "./styles";

const Item = ({ todo }) => {
  const { id, content, isCompleted } = todo;
  console.log(id, content, isCompleted);
  return (
    <ItemStyled>
      <input type="checkbox" />
      <p className={`todo-content ${isCompleted && "completed"}`}>{content}</p>
      <img src="/src/assets/trash.png" alt="trash" />
    </ItemStyled>
  );
};

export default Item;
