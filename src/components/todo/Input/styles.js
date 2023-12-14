import styled from "styled-components";

const InputStyled = styled.div`
  margin-bottom: 15px;
  position: relative;
  width: 230px;

  & > input {
    outline: none;
    border: 1px solid #dd9b99;
    padding: 5px 32px 5px 10px;
    border-radius: 5px;
    width: 230px;
    font-size: 15px;
    font-weight: bold;
  }

  .plus-button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 3px;
    right: 2px;
    cursor: pointer;
    transition: all 0.4s;
  }

  .plus-button:hover{
    transform: scale(1.1)
  }
`;

export default InputStyled;
