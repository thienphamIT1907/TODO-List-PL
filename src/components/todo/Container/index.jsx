import { useEffect, useState } from "react";
import axiosRequest from "../../../config/axios";
import Input from "../Input";
import List from "../List";
import Title from "../Title";
import ContainerStyled from "./styles";

const Container = () => {
  const [todoList, setTodoList] = useState([]);

  const [isShowScroll, setIsShowScroll] = useState(false);

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    setTodoList(response.data);
  };

  const handleScroll = (length) => {
    if (length > 3) {
      setIsShowScroll(true);
    } else {
      setIsShowScroll(false);
    }
  };

  useEffect(() => {
    fetchTodo();
    handleScroll(todoList?.length);
  }, [todoList?.length]);

  return (
    <ContainerStyled>
      {/**Title */}
      <Title content="To do list:" />
      {/**Input */}
      <Input setTodoList={setTodoList} fetchTodo={fetchTodo} />
      {/**List */}
      <List todoList={todoList} isShowScroll={isShowScroll} />
    </ContainerStyled>
  );
};

export default Container;
