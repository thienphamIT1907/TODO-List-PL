import styled from "styled-components";

const ListStyled = styled.div`
  overflow-y: ${({ isShowScrollbar }) =>
    isShowScrollbar === true ? "scroll" : "hidden"};
  height: 150px;
`;

export default ListStyled;
