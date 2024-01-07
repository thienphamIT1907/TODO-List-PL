import styled from "styled-components";

const CustomCheckboxStyled = styled.div`
  .checkbox-container {
    width: 30px;
    height: 30px;
    display: inline-block;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  .check-mask {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid #989898;
    border-radius: 50%;
  }

  .checkbox-container input[type="checkbox"]:checked + .check-mask {
    background-color: #dd9b99;
    position: relative;
    transition: 0.5s;
  }

  .checkbox-container input[type="checkbox"]:checked + .check-mask::before {
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
