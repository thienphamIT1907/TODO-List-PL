import styled from "styled-components";

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  font-size: 18px;
  margin-right: 20px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
  transition: all 0.4s;

  & > input[type=checkbox] {
    background: red;
  }

  &:hover {
    background: #dd9b992e;
  }

  .todo-content {
    margin-right: auto;
    padding-left: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: #8080806e;
  }
`;

export default ItemStyled;
