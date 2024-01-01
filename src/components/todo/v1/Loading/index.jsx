import LoadingDataStyled from "src/components/todo/v1/Loading/styles";

const LoadingData = () => {
  return (
    <LoadingDataStyled>
      <img src="src/assets/loading.gif" />
      <p>Loading data...</p>
    </LoadingDataStyled>
  );
};

export default LoadingData;
