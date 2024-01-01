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

  & > input[type="checkbox"] {
    background: red;
  }

  &:hover {
    background: #dd9b992e;
    border-radius: 12px;
  }

  .todo-content {
    margin-right: auto;
    padding-left: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: #8080806e;
  }

  .content {
    width: 100%;
    text-align: left;

    & > span {
      padding-left: 10px;
      font-style: italic;
      color: gray;
      font-size: 13px;
      margin-top: 10px;
      display: inline-block;
      font-weight: 300;
    }
  }

  .delete-button {
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 15px;
    transition: 0.2s;
    cursor: pointer;
    background: #dd9b99;
    color: white;

    &:hover {
      background: #b77a79
    }
  }
`;

export default ItemStyled;
