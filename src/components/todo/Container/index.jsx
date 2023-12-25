import { useEffect, useState } from "react";
import axiosRequest from "../../../config/axiosConfig";
import Input from "../Input";
import List from "../List";
import Title from "../Title";
import ContainerStyled from "./styles";

const Container = () => {
  const [todoList, setTodoList] = useState([]);
  const [isShowScrollbar, setIsShowScrollbar] = useState(false);

  const handleScroll = (length) => {
    if (length > 3) {
      setIsShowScrollbar(true);
    } else {
      setIsShowScrollbar(false);
    }
  };

  const fetchTodo = async () => {
    const response = await axiosRequest("/todos");
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchTodo();
    handleScroll(todoList?.length);
  }, [todoList?.length]);

  return (
    <ContainerStyled>
      <Title content="To do list:" />
      <Input setTodoList={setTodoList} fetchTodo={fetchTodo} />
      <List
        todoList={todoList}
        isShowScrollbar={isShowScrollbar}
        fetchTodo={fetchTodo}
        setTodoList={setTodoList}
      />
    </ContainerStyled>
  );
};

export default Container;
