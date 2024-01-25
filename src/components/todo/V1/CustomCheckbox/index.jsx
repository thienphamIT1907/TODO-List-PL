import CustomCheckboxStyled from "./styles";

const CustomCheckbox = ({ id, isChecked, setIsChecked }) => {
  return (
    <CustomCheckboxStyled>
      <label htmlFor={id} className="checkbox-container">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.value)}
        />
        <div className="check-mask"></div>
      </label>
    </CustomCheckboxStyled>
  );
};

export default CustomCheckbox;
