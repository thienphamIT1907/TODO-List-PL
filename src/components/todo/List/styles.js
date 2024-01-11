import styled from "styled-components";

const ListStyled = styled.div`
  height: 150px;
  overflow-y: ${({ isShowScroll }) =>
    isShowScroll === true ? "scroll" : "hidden"};
`;

export default ListStyled;
