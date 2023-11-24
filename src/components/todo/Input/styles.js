import styled from "styled-components";

const InputStyled = styled.div`
  margin-top: 25px;
  position: relative;
  display: inline-block;

  & > input {
    padding: 10px 40px 10px 15px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #dd9b99;
    width: 250px;
    font-size: 18px;
  }

  .add-button {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    transition: all 0.4s;
  }

  .add-button:hover {
    transform: scale(1.2);
  }

`;

export default InputStyled;
