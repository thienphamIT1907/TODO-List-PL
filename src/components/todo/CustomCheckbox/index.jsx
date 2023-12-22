import React from "react";
import CustomCheckboxStyled from "./styles";

const CustomCheckbox = ({ id, isChecked, setIsChecked }) => {
  return (
    <CustomCheckboxStyled>
      <label htmlFor={id} className="checkbox__container">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="checkbox__mask"></div>
      </label>
    </CustomCheckboxStyled>
  );
};

export default CustomCheckbox;
