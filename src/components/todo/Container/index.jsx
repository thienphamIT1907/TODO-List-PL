import Input from "../Input";
import List from "../List";
import Title from "../Title";
import ContainerStyled from "./styles";

const Container = () => {
  return (
    <ContainerStyled>
      {/* Title */}
      <Title content="To do list:" />
      {/* Input */}
      <Input />
      {/* List */}
      <List />
    </ContainerStyled>
  );
};

export default Container;
