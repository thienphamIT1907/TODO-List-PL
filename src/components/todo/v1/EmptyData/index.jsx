import EmptyDataStyled from "src/components/todo/v1/EmptyData/styles";

const EmptyData = () => {
  return (
    <EmptyDataStyled>
      <img src="/src/assets/empty-data-icon.png" alt="empty-data.png" />
      <p>Sorry. No data here :(</p>
    </EmptyDataStyled>
  );
};

export default EmptyData;
