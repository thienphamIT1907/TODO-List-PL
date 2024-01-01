import styled from "styled-components";

const LoadingDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    margin-top: 20px;
    font-size: 14px;
    color: gray;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export default LoadingDataStyled;
