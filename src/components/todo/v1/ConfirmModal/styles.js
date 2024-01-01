import styled from "styled-components";

const ConfirmModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  background: white;
  position: absolute;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h2 {
    margin: 15px 0;
  }

  .action-buttons {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 20px;
  }

  .button {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 15px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  .primary {
    background: #dd9b99;
    color: white;
  }
`;

export default ConfirmModalStyled;
