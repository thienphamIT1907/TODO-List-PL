import styled from "styled-components";

const ListStyled = styled.div`
  overflow-y: ${({ isShowScrollbar }) =>
    isShowScrollbar === true ? "scroll" : "hidden"};
  height: 205px;
  position: relative;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #de9b99;
    border-radius: 10px;
  }
`;

export default ListStyled;
