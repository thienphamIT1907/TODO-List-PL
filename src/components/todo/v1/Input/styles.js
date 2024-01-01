import styled from "styled-components";

const InputStyled = styled.div`
  margin: 15px 0 20px;
  position: relative;
  width: 230px;

  & > input {
    outline: none;
    border: 1px solid #dd9b99;
    padding: 8px 32px 8px 10px;
    border-radius: 5px;
    width: 230px;
    font-size: 15px;
    font-weight: bold;
  }

  .plus-button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    transition: all 0.4s;
    border: none;
    outline: none;
    background: transparent;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .plus-button:hover {
    transform: scale(1.1);
  }

  .disabled-btn {
    filter: grayscale(1);
    cursor: not-allowed;
  }

  .disabled-btn:hover {
    transform: unset;
  }
`;

export default InputStyled;
