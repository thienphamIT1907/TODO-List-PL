import ContainerStyled from "src/components/todo/v1/Container/styles";
import Input from "src/components/todo/v1/Input";
import List from "src/components/todo/v1/List";
import Title from "src/components/todo/v1/Title";

const Container = () => {
  return (
    <ContainerStyled>
      <Title content="To do list:" />
      <Input />
      <List />
    </ContainerStyled>
  );
};

export default Container;
