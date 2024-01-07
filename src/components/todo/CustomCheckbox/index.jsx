import CustomCheckboxStyled from "./styles";

const CustomCheckbox = ({ id, isChecked }) => {
  return (
    <CustomCheckboxStyled>
      <label htmlFor={id} className="checkbox-container">
        <input type="checkbox" id={id} checked={isChecked} />
        <div className="check-mask"></div>
      </label>
    </CustomCheckboxStyled>
  );
};

export default CustomCheckbox;
