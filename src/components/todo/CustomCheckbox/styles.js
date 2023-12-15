import styled from "styled-components";

const CustomCheckboxStyled = styled.div`
  .checkbox__container {
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  .checkbox__mask {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 50%;
    border: 1px solid #989898;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  .checkbox__container input[type="checkbox"]:checked + .checkbox__mask {
    background: #de9b99;
    position: relative;
    transition: 0.5s;
    border: none;
  }

  .checkbox__container
    input[type="checkbox"]:checked
    + .checkbox__mask::before {
    content: "";
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg) translate(-100%, -20%);
    height: 10px;
    width: 5px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export default CustomCheckboxStyled;
