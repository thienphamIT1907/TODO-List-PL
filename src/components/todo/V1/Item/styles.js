import styled from "styled-components";

const ItemStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 25px 10px 10px;
border-bottom: 1px solid #f2f2f2;
cursor: pointer;
transition: all 0.4s;

&:hover {
  background-color: #ffecea;
};

& > input {
  
}

.todo-content {
  margin-right: auto;
  padding-left: 15px;
  font-size: 18px;
}

.completed {
  text-decoration: line-through;
  color: #8080806e;
}

& > img {
  width: 22px;
  height: 22px;
}
`;

export default ItemStyled